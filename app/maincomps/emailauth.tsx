'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eyeicon } from "../icons/eye";
import { useAuthStore } from "../store/useAuthStore";

export default function EmailAuth() {
  const [showPassword, setShowPassword] = useState(false);
  const showOnly = useAuthStore((state) => state.showOnly);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md flex flex-col">

        {/* Back button */}
        <button
          onClick={() => showOnly("auth")}
          className="text-gray-500 text-sm mb-4 hover:underline flex items-center gap-1"
          type="button"
        >
          &larr; Back
        </button>

        <h1 className="text-xl font-semibold mb-1">Login with email</h1>
        <p className="text-gray-600 text-sm mb-6">
          Login using your email address.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email or Username"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={showPassword ? "Hide password" : "Show password"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowPassword(!showPassword);
              }}
            >
              <Eyeicon />
            </span>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-2 text-base py-[10px]">
            Login
          </Button>
        </form>

        <div className="mt-6 text-sm text-gray-700 flex justify-between">
          <Link href="#" className="underline hover:text-blue-600">
            Forgot password
          </Link>
          <span className="mx-2 text-gray-300">|</span>
          <button
            onClick={() => showOnly("register")}
            className="underline hover:text-blue-600"
            type="button"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
