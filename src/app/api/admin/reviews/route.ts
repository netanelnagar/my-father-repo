import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { verifyAdminToken } from '@/lib/auth';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

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
    const { rating, content, image_filename } = await request.json();

    if (!rating || !content) {
      return NextResponse.json(
        { success: false, error: 'דירוג ותוכן הם שדות חובה' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: 'דירוג חייב להיות בין 1 ל-5' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO reviews (rating, content, image_filename) VALUES ($1, $2, $3) RETURNING *',
      [rating, content, image_filename || null]
    );

    return NextResponse.json({
      success: true,
      review: result.rows[0],
      message: 'הביקורת נוספה בהצלחה'
    });
  } catch (error) {
    console.error('Add review error:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה בהוספת הביקורת' },
      { status: 500 }
    );
  }
}