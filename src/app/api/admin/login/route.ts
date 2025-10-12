import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Check credentials against environment variables
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'אימייל או סיסמה שגויים' },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { email, isAdmin: true },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    // Create response and set cookie
    const response = NextResponse.json({
      success: true,
      message: 'התחברות בוצעה בהצלחה'
    });

    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה בהתחברות' },
      { status: 500 }
    );
  }
}