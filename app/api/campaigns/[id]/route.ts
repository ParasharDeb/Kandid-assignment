import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db/drizzle';
import { campaigns } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // params is Promise now
) {
  try {
    const { id } = await context.params; // await the promise here
    const campaignId = Number(id);

    const body: unknown = await request.json();
    const updates: Partial<typeof campaigns.$inferSelect> = {};

    if (body && typeof body === 'object') {
      const b = body as Partial<typeof campaigns.$inferSelect>;
      if (typeof b.status === 'string') updates.status = b.status;
      if (typeof b.campaignName === 'string') updates.campaignName = b.campaignName;
      if (typeof b.totalLeads === 'number') updates.totalLeads = b.totalLeads;
      if (typeof b.successfulLeads === 'number') updates.successfulLeads = b.successfulLeads;
      if (typeof b.responseRate === 'number') updates.responseRate = b.responseRate;
      if (typeof b.progress === 'number') updates.progress = b.progress;
    }

    const [updated] = await db
      .update(campaigns)
      .set(updates)
      .where(eq(campaigns.id, campaignId))
      .returning();

    return NextResponse.json({ campaign: updated });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'Failed to update campaign';
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
