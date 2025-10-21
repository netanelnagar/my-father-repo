import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { mkdir, readdir, unlink, writeFile } from 'fs/promises';
import { verifyAdminToken } from '@/lib/auth';
import { existsSync } from 'fs';


const uploadsDir = path.join(process.cwd(), 'public');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico'];
const videoExtensions = ['.mp4', '.mov', '.webm', '.mkv'];

function isImage(name: string) {
    const ext = path.extname(name).toLowerCase();
    return imageExtensions.includes(ext);
}

function isVideo(name: string) {
    const ext = path.extname(name).toLowerCase();
    return videoExtensions.includes(ext);
}

export async function GET(request: NextRequest) {
    const admin = verifyAdminToken(request);
    if (!admin) return NextResponse.json({ success: false, error: 'לא מחובר כאדמין' }, { status: 401 });

    try {
        await mkdir(uploadsDir, { recursive: true });
        const entries = await readdir(uploadsDir, { withFileTypes: true });
        const images = entries
            .filter((e) => e.isFile() && isImage(e.name))
            .map((e) => ({ filename: e.name, url: `/${e.name}` }));
        const videos = entries
            .filter((e) => e.isFile() && isVideo(e.name))
            .map((e) => ({ filename: e.name, url: `/${e.name}` }));
        return NextResponse.json({ success: true, images, videos });
    } catch (e) {
        console.error('List uploads error:', e);
        return NextResponse.json({ success: false, error: 'שגיאה בטעינת התמונות' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
        return NextResponse.json(
            { success: false, error: 'לא מחובר כאדמין' },
            { status: 401 }
        );
    }

    try {
        const formData = await request.formData();
        const file = formData.get('image') as File;

        if (!file) {
            return NextResponse.json(
                { success: false, error: 'לא נבחר קובץ' },
                { status: 400 }
            );
        }

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/mov', 'video/webm', 'video/mkv', 'video/quicktime'];
        if (!allowedTypes.includes(file.type)) {
            console.error('file.type', file.type);
            return NextResponse.json(
                { success: false, error: 'רק קבצי תמונה וידאו מותרים (JPEG, PNG, GIF, WebP, MP4, MOV, WEBM, MKV)' },
                { status: 400 }
            );
        }

        if (!existsSync(uploadsDir)) {
            await mkdir(uploadsDir, { recursive: true });
        }

        // Generate unique filename
        const timestamp = Date.now();
        const extension = path.extname(file.name);
        const filename = `${timestamp}${extension}`;
        const filepath = path.join(uploadsDir, filename);

        // Convert file to buffer and save
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filepath, buffer);

        return NextResponse.json({
            success: true,
            filename,
            originalName: file.name,
            message: 'התמונה הועלתה בהצלחה'
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { success: false, error: 'שגיאה בהעלאת התמונה' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    const admin = verifyAdminToken(request);
    if (!admin) return NextResponse.json({ success: false, error: 'לא מחובר כאדמין' }, { status: 401 });

    try {
        const body = await request.json().catch(() => ({}));
        const filenames: string[] = Array.isArray(body?.filenames) ? body.filenames : [];
        if (!filenames.length) {
            return NextResponse.json({ success: false, error: 'אין קבצים למחיקה' }, { status: 400 });
        }

        const deleted: string[] = [];
        for (const name of filenames) {
            // Prevent path traversal
            const safe = path.basename(name);
            const target = path.join(uploadsDir, safe);
            try {
                await unlink(target);
                deleted.push(safe);
            } catch {
                //TODO: ignore missing
            }
        }
        return NextResponse.json({ success: true, deleted });
    } catch (e) {
        console.error('Delete uploads error:', e);
        return NextResponse.json({ success: false, error: 'שגיאה במחיקת תמונות' }, { status: 500 });
    }
}