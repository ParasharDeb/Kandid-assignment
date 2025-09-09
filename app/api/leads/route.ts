import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { Leads } from "@/db/schema";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not set');
    }
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search')?.toLowerCase() || '';
    const campaign = searchParams.get('campaign');

    let results = await db.select().from(Leads);
    if (campaign) {
      results = results.filter(l => l.campaign === campaign);
    }
    if (search) {
      results = results.filter(l =>
        l.name.toLowerCase().includes(search) ||
        (l.campaign ?? '').toLowerCase().includes(search)
      );
    }
    return NextResponse.json({ leads: results });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'Failed to fetch leads';
    console.error('[GET /api/leads] error', error);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}