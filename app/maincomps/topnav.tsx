'use client'
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function TopNavigation() {
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await authClient.signOut();
      window.location.href = '/';
    } catch (e) {
      console.error('Logout failed', e);
      setLoggingOut(false);
    }
  };
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between md:hidden">
      {/* Left: Logo + Brand */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 rounded p-1">
          <span className="text-white font-bold">Logo</span>
        </div>
        <span className="font-bold text-lg">
          Link<span className="text-blue-600">Bird</span>
        </span>
      </div>

      {/* Right: Navigation Links */}
      <nav className="flex items-center gap-4">
        <ul className="flex space-x-4 text-sm font-medium text-gray-700">
          <li>
            <Link href="#" className="text-blue-600 font-semibold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600">
              Leads
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600">
              Campaign
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600">
              Messages
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600">
              LinkedIn Accounts
            </Link>
          </li>
        </ul>
        <button onClick={handleLogout} disabled={loggingOut} className="px-3 py-1.5 text-sm border rounded-md text-gray-600 hover:text-red-600 hover:border-red-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2">
          {loggingOut && (
            <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          )}
          {loggingOut ? 'Logging out…' : 'Logout'}
        </button>
      </nav>
    </header>
  );
}
