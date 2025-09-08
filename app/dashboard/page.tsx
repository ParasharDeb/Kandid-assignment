'use client'
import LeftNavigation from "../maincomps/Leftnav";
import TopNavigation from "../maincomps/topnav";
import CampDashboard from "../maincomps/dashboard-campaigns";
import LinkedinAccs from "../maincomps/dashboard-linkedin";
import RecentDashboard from "../maincomps/dashboard-recents";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-64 md:shrink-0">
        <LeftNavigation />
      </div>

      {/* Mobile Top Navigation */}
      <div className="md:hidden">
        <TopNavigation />
      </div>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <CampDashboard />
          <LinkedinAccs />
        </div>
        <div className="w-full lg:w-1/3">
          <RecentDashboard />
        </div>
      </main>
    </div>
  );
}
