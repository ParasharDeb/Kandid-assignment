'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import DashboardIcon from "../icons/dashboard";
import LeadsIcon from "../icons/leads";
import CampaignIcon from "../icons/campaign";
import MessageIcon from "../icons/message";
import EnvelopeIcon from "../icons/envelope";
import SettingsIcon from "../icons/settings";
import ActivityIcon from "../icons/activity";
import UserlogIcon from "../icons/userlog";
export default function LeftNavigation() {
  const Router=useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await authClient.signOut();
      Router.push('/');
    } catch (e) {
      console.error('Logout failed', e);
      setLoggingOut(false);
    }
  };
  return (
    <aside className="bg-white h-screen w-64 shadow-lg flex flex-col py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 mb-6">
        <div className="bg-blue-600 rounded p-1">
          <span className="text-white font-bold">Logo</span>
        </div>
        <span className="font-bold text-lg">
          Link<span className="text-blue-600">Bird</span>
        </span>
      </div>
      {/* User */}
      <div className="px-6 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 text-sm select-none">PE</div>
          <div>
            <span className="block font-semibold text-sm">Parashar Deb</span>
            <span className="block text-xs text-gray-400">debparashar76@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="px-2 mb-4">
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              <DashboardIcon />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/leads" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md" >
              <LeadsIcon />
              Leads
            </Link>
          </li>
          <li>
            <Link href="/campaigns" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              <CampaignIcon />
              Campaign
            </Link>
          </li>
          <li>
            <Link href="/messages" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              <MessageIcon />
              Messages
              
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              <EnvelopeIcon />
              LinkedIn Accounts
            </Link>
          </li>
        </ul>
      </nav>
      {/* Settings */}
      <div className="px-6 mb-4">
        <div className="text-xs text-gray-400 mb-1">Settings</div>
        <Link href="#" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 text-gray-700 text-sm flex items-center gap-2">
          <SettingsIcon />
          Setting & Billing
        </Link>
      </div>
      {/* Admin Panel */}
      <div className="px-6 mb-4">
        <div className="text-xs text-gray-400 mb-1">Admin Panel</div>
        <Link href="#" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 text-gray-700 text-sm flex items-center gap-2">
          <ActivityIcon />
          Activity logs
        </Link>
        <Link href="#" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 text-gray-700 text-sm flex items-center gap-2">
          <UserlogIcon />
          User logs
        </Link>
      </div>
      <div className="mt-auto px-6">
        <button onClick={handleLogout} disabled={loggingOut} className="w-full px-3 py-2 text-sm border rounded-md text-gray-600 hover:text-red-600 hover:border-red-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {loggingOut && (
            <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          )}
          {loggingOut ? 'Logging out…' : 'Logout'}
        </button>
      </div>
      
    </aside>
  );
}
