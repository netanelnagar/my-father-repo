import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { verifyAdminToken } from '@/lib/auth';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Verify admin authentication
  const admin = verifyAdminToken(request);
  if (!admin) {
    return NextResponse.json(
      { success: false, error: 'לא מחובר כאדמין' },
      { status: 401 }
    );
  }

  try {
    const { id } = params;

    // Get the review to delete associated image file
    const review = await pool.query('SELECT * FROM reviews WHERE id = $1', [id]);

    if (review.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'ביקורת לא נמצאה' },
        { status: 404 }
      );
    }

    // Delete image file if exists
    if (review.rows[0].image_filename) {
      const imagePath = path.join(process.cwd(), 'public', review.rows[0].image_filename);
      if (existsSync(imagePath)) {
        await unlink(imagePath);
      }
    }

    // Delete from database
    await pool.query('DELETE FROM reviews WHERE id = $1', [id]);

    return NextResponse.json({
      success: true,
      message: 'הביקורת נמחקה בהצלחה'
    });
  } catch (error) {
    console.error('Delete review error:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה במחיקת הביקורת' },
      { status: 500 }
    );
  }
}