import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    let filtered = products;
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
