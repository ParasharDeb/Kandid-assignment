'use client'
import LeftNavigation from "../maincomps/Leftnav";
import CampDashboard from "../maincomps/dashboard-campaigns";
import LinkedinAccs from "../maincomps/dashboard-linkedin";
import RecentDashboard from "../maincomps/dashboard-recents";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <LeftNavigation />
      <main className="flex-1 p-6 flex gap-6">
        <div className="w-2/3 flex flex-col gap-6">
          <CampDashboard />
          <LinkedinAccs />
        </div>
        <RecentDashboard />
      </main>
    </div>
  );
}
