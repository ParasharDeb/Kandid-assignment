'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LeftNavigation() {
  const Router=useRouter();
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
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/leads" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md" >Leads</Link>
          </li>
          <li>
            <Link href="/campaigns" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">Campaign</Link>
          </li>
          <li>
            <Link href="/messages" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              Messages
              
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">LinkedIn Accounts</Link>
          </li>
        </ul>
      </nav>
      {/* Settings */}
      <div className="px-6 mb-4">
        <div className="text-xs text-gray-400 mb-1">Settings</div>
        <Link href="#" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 text-gray-700 text-sm">Setting & Billing</Link>
      </div>
      {/* Admin Panel */}
      <div className="px-6 mb-4">
        <div className="text-xs text-gray-400 mb-1">Admin Panel</div>
        <Link href="#" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 text-gray-700 text-sm">Activity logs</Link>
        <Link href="#" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 text-gray-700 text-sm">User logs</Link>
      </div>
      
    </aside>
  );
}
