'use client'
import { Button } from "@/components/ui/button";

const campaigns = [
  "Just Herbs", "Juicy chemistry", "Hyugalife 2", "Honeyveda", "HempStreet", "HealthyHey 2"
];

export default function CampDashboard() {
  return (
    <section className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Campaigns</h2>
        <Button variant="outline" className="text-xs px-2 py-1">All Campaigns</Button>
      </div>
      <ul>
        {campaigns.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <span className="font-medium text-gray-700">{item}</span>
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Active</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
