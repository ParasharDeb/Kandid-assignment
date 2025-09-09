import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { campaigns } from "@/db/schema";
import { eq } from "drizzle-orm";

type CampaignSelect = typeof campaigns.$inferSelect;
type CampaignInsert = typeof campaigns.$inferInsert;

export async function PATCH(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body: unknown = await _request.json();
    const updates: Partial<CampaignSelect> = {};

    if (body && typeof body === "object") {
      const b = body as Partial<CampaignSelect>;
      if (typeof b.status === "string") updates.status = b.status as CampaignSelect["status"];
      if (typeof b.campaignName === "string") updates.campaignName = b.campaignName;
      if (typeof b.totalLeads === "number") updates.totalLeads = b.totalLeads;
      if (typeof b.successfulLeads === "number") updates.successfulLeads = b.successfulLeads;
      if (typeof b.responseRate === "number") updates.responseRate = b.responseRate;
      if (typeof b.progress === "number") updates.progress = b.progress;
    }

    const [updated] = await db.update(campaigns).set(updates).where(eq(campaigns.id, id)).returning();
    return NextResponse.json({ campaign: updated });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Failed to update campaign";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const [deleted] = await db.delete(campaigns).where(eq(campaigns.id, id)).returning();
    return NextResponse.json({ campaign: deleted });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Failed to delete campaign";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export async function POST(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body: unknown = await _request.json();
    // Optionally validate body here
    const [created] = await db.insert(campaigns).values(body as CampaignInsert).returning();
    return NextResponse.json({ campaign: created });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Failed to create campaign";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
