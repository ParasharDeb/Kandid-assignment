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


