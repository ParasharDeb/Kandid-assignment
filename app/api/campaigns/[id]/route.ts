import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { campaigns } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body = await _request.json();
    const updates: Partial<typeof campaigns.$inferSelect> = {} as any;

    if (typeof body.status === "string") updates.status = body.status as any;
    if (typeof body.campaignName === "string") updates.campaignName = body.campaignName;
    if (typeof body.totalLeads === "number") updates.totalLeads = body.totalLeads;
    if (typeof body.successfulLeads === "number") updates.successfulLeads = body.successfulLeads;
    if (typeof body.responseRate === "number") updates.responseRate = body.responseRate;
    if (typeof body.progress === "number") updates.progress = body.progress;

    const [updated] = await db.update(campaigns).set(updates).where(eq(campaigns.id, id)).returning();
    return NextResponse.json({ campaign: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update campaign" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const [deleted] = await db.delete(campaigns).where(eq(campaigns.id, id)).returning();
    return NextResponse.json({ campaign: deleted });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete campaign" }, { status: 500 });
  }
}


