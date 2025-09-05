'use client'
import Link from "next/link";

export default function LeftNavigation() {
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
            <span className="block font-semibold text-sm">Kandid</span>
            <span className="block text-xs text-gray-400">Personal</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="px-2 mb-4">
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="#" className="flex items-center bg-blue-100 rounded-md font-medium px-3 py-2 text-blue-500 gap-2">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700">Leads</Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700">Campaign</Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700">
              Messages
              
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700">LinkedIn Accounts</Link>
          </li>
        </ul>
      </nav>
      {/* Settings */}
      <div className="px-6 mb-4">
        <div className="text-xs text-gray-400 mb-1">Settings</div>
        <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm">Setting & Billing</Link>
      </div>
      {/* Admin Panel */}
      <div className="px-6 mb-4">
        <div className="text-xs text-gray-400 mb-1">Admin Panel</div>
        <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm">Activity logs</Link>
        <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm">User logs</Link>
      </div>
      {/* Footer */}
      <div className="mt-auto px-6">
        <div className="flex items-center gap-2 mb-1 mt-16">
          <div className="bg-gray-300 font-bold rounded-full w-8 h-8 flex items-center justify-center text-xs text-white select-none">BK</div>
          <div>
            <span className="block text-gray-800 text-xs font-semibold">Bhavya From Kandid</span>
            <span className="block text-xs text-gray-400">bhavya@kandid.ai</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
