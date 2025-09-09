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
    const errMsg = error instanceof Error ? error.message : "Failed to fetch campaigns";
    console.error('[GET /api/campaigns] error', error);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

type CampaignInsert = typeof campaigns.$inferInsert;

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    // Type guard for expected body shape
    if (
      !body ||
      typeof body !== "object" ||
      !("campaignName" in body) ||
      typeof (body as { campaignName: unknown }).campaignName !== "string"
    ) {
      return NextResponse.json({ error: 'campaignName is required' }, { status: 400 });
    }
    const b = body as Partial<CampaignInsert>;
    const campaignName = (b.campaignName || '').toString().trim();
    const values: Partial<CampaignInsert> = {
      campaignName,
      status: (b.status || 'Draft') as CampaignInsert["status"],
      totalLeads: typeof b.totalLeads === 'number' ? b.totalLeads : 0,
      successfulLeads: typeof b.successfulLeads === 'number' ? b.successfulLeads : 0,
      responseRate: typeof b.responseRate === 'number' ? b.responseRate : 0,
      progress: typeof b.progress === 'number' ? b.progress : 0,
    };
    const [created] = await db.insert(campaigns).values(values).returning();
    return NextResponse.json({ campaign: created }, { status: 201 });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'Failed to create campaign';
    console.error('[POST /api/campaigns] error', error);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}


