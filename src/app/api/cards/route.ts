import { NextResponse } from "next/server";

// Minimal stub API. In production, wire to Prisma.
export async function GET() {
  return NextResponse.json({ items: [] });
}

export async function POST() {
  return new NextResponse("Not Implemented", { status: 501 });
}
