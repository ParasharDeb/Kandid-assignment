'use client'
import Link from "next/link";

export default function TopNavigation() {
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
      <nav>
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
      </nav>
    </header>
  );
}
