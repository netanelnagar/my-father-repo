import path from 'path';
import { writeFile } from 'fs/promises';

export async function uploadImage(file: File): Promise<string | null> {

    try {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            throw new Error('רק קבצי תמונה מותרים (JPEG, PNG, GIF, WebP)');
        }
        // TODO: maybe resizing the image before saving
        const uploadsDir = path.join(process.cwd(), 'public');

        const safeName = `${Date.now()}_${file.name.replace(/[^\w.-]/g, '_')}`;
        const filePath = path.join(uploadsDir, safeName);
        const buffer = Buffer.from(await file.arrayBuffer());
        await writeFile(filePath, buffer);

        return safeName;
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
}