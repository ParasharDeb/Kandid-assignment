'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import LeftNavigation from "../maincomps/Leftnav";
import { Button } from "@/components/ui/button";

// Dummy Drizzle-style data; replace with actual DB queries
const LEADS = [
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },{
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
  {
    name: "Om Satyarthy",
    designation: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    lastContact: "Sent 7 mins ago",
    activity: 5,
    email: "om.satyarthy@gynoveda.com",
    history: [
      { label: "Invitation Request", message: "Hi Om, I'm building consultative AI ..." },
      { label: "Connection Status", message: "Check connection status" },
      { label: "Replied", message: "View Reply" },
    ],
  },
];

export default function LeadsSection() {
  const [selectedLead, setSelectedLead] = useState<number | null>(null);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredLeads = LEADS.filter((lead) =>
    lead.name.toLowerCase().includes(filter.toLowerCase()) ||
    lead.campaign.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex bg-[#f7f8fb] min-h-screen">
      <LeftNavigation />
      <main className="flex-1 p-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold tracking-tight">Leads</h2>
          <Input
            placeholder="Search by name or campaign..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-72"
          />
        </div>
        <div className="rounded-lg bg-white shadow border">
          <div className="flex px-6 py-3 border-b bg-[#f7f8fb] text-gray-600 text-[15px]">
            <div className="w-64 font-medium">Name</div>
            <div className="w-48 font-medium">Campaign Name</div>
            <div className="w-32 font-medium">Activity</div>
            <div className="w-40 font-medium">Status</div>
          </div>
          <div style={{ maxHeight: "600px", overflowY: "auto" }}>
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex px-6 py-4 items-center border-b">
                    <Skeleton className="w-12 h-12 rounded-full mr-4" />
                    <div className="w-64"><Skeleton className="w-32 h-4" /></div>
                    <div className="w-48"><Skeleton className="w-24 h-4" /></div>
                    <div className="w-32"><Skeleton className="w-10 h-4" /></div>
                    <div className="w-40"><Skeleton className="w-20 h-4" /></div>
                  </div>
                ))
              : filteredLeads.map((lead, idx) => (
                  <div
                    key={idx}
                    className="flex px-6 py-4 items-center border-b hover:bg-[#f0f2f6] cursor-pointer"
                    onClick={() => setSelectedLead(idx)}
                  >
                    <div className="w-64 flex items-center gap-3">
                      {/* Avatar Placeholder */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200" />
                      <div>
                        <div className="font-medium">{lead.name}</div>
                        <div className="text-xs text-gray-500">{lead.designation}</div>
                      </div>
                    </div>
                    <div className="w-48">{lead.campaign}</div>
                    <div className="w-32 flex gap-1">
                      <span className="flex gap-1">
                        {/* Activity bars */}
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-6 rounded ${
                              lead.activity ? "bg-yellow-400" : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </span>
                    </div>
                    <div className="w-40 flex flex-col">
                      <Badge
                        variant={
                          lead.status === "Pending Approval"
                            ? "outline"
                            : lead.status === "Do Not Contact"
                            ? "secondary"
                            : "default"
                        }
                        className={`${
                          lead.status === "Pending Approval"
                            ? "bg-violet-100 text-violet-700 border-violet-300"
                            : lead.status === "Do Not Contact"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {lead.status}
                      </Badge>
                      <span className="text-xs text-gray-400">{lead.lastContact}</span>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Side Sheet for Lead Details */}
        <Sheet open={selectedLead !== null} onOpenChange={() => setSelectedLead(null)}>
          <SheetContent position="right" size="md" className="p-0">
            {selectedLead !== null && (
              <div className="h-full w-full flex flex-col">
                <SheetHeader className="px-7 pt-8 pb-2 border-b">
                  <SheetTitle>
                    <div className="flex items-center gap-3">
                      {/* Avatar Placeholder */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200" />
                      <div>
                        <div className="font-semibold text-lg">
                          {filteredLeads[selectedLead].name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {filteredLeads[selectedLead].designation}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-violet-100 text-violet-700 border-violet-300">
                            {filteredLeads[selectedLead].campaign}
                          </Badge>
                          <Badge className="bg-violet-100 text-violet-700 border-violet-300">
                            Pending Approval
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="px-7 py-6 flex-1 overflow-y-auto">
                  <div>
                    {/* Contact & Details */}
                    <div className="mb-7">
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-sm text-gray-700 mb-4">
                        {filteredLeads[selectedLead].email}
                      </div>
                    </div>
                    {/* Timeline */}
                    <div>
                      <div className="font-medium">Interaction History</div>
                      <div className="mt-4 border-l-2 border-gray-200 pl-4">
                        {filteredLeads[selectedLead].history.map((step, i) => (
                          <div key={i} className="mb-8 relative">
                            <div className="absolute -left-6 top-1">
                              <div className="w-4 h-4 bg-white border-2 border-violet-300 rounded-full" />
                            </div>
                            <div className="font-semibold text-violet-600">{step.label}</div>
                            <div className="text-sm text-gray-600 mt-1">
                              {step.label === "Invitation Request" ? (
                                <>
                                  Message: {step.message}
                                  <Button variant="link" size="sm" className="text-xs ml-1">See More</Button>
                                </>
                              ) : step.label === "Replied" ? (
                                <Button variant="link" size="sm" className="text-xs">{step.message}</Button>
                              ) : (
                                step.message
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="px-7 py-4 border-t flex gap-3 justify-end bg-white">
                  <Button variant="default">Contact</Button>
                  <Button variant="outline">Update Status</Button>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}
