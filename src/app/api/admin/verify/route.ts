import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('adminToken')?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'לא מחובר כאדמין' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    
    return NextResponse.json({
      success: true,
      admin: {
        email: decoded.email,
        isAdmin: decoded.isAdmin
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'טוקן לא תקין' },
      { status: 401 }
    );
  }
}