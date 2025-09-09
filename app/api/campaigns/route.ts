import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { campaigns } from "@/db/schema";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    let results = await db.select().from(campaigns);

    if (status && status !== "All Campaigns") {
      results = results.filter((c) => c.status === status);
    }
    if (search && search.trim().length > 0) {
      const q = search.toLowerCase();
      results = results.filter((c) => c.campaignName.toLowerCase().includes(q));
    }

    return NextResponse.json({ campaigns: results });
  } catch (error) {
    console.error('[GET /api/campaigns] error', error);
    return NextResponse.json({ error: "Failed to fetch campaigns" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const campaignName = (body?.campaignName || '').toString().trim();
    if (!campaignName) {
      return NextResponse.json({ error: 'campaignName is required' }, { status: 400 });
    }
    const values: Partial<typeof campaigns.$inferInsert> = {
      campaignName,
      status: (body?.status || 'Draft') as any,
      totalLeads: typeof body?.totalLeads === 'number' ? body.totalLeads : 0,
      successfulLeads: typeof body?.successfulLeads === 'number' ? body.successfulLeads : 0,
      responseRate: typeof body?.responseRate === 'number' ? body.responseRate : 0,
      progress: typeof body?.progress === 'number' ? body.progress : 0,
    };
    const [created] = await db.insert(campaigns).values(values).returning();
    return NextResponse.json({ campaign: created }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/campaigns] error', error);
    return NextResponse.json({ error: 'Failed to create campaign' }, { status: 500 });
  }
}


