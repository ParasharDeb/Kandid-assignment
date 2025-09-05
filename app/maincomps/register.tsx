'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eyeicon } from "../icons/eye";
import { useAuthStore } from "../store/useAuthStore";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const showOnly = useAuthStore((state) => state.showOnly);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

        <h1 className="text-xl font-semibold mb-1">Register with email</h1>
        <p className="text-gray-600 text-sm mb-6">
          Register using your email address.
        </p>

        <form className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 text-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm pr-10"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") togglePasswordVisibility();
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <Eyeicon />
            </span>
          </div>
          <Button className="w-full bg-blue-700 hover:bg-blue-700 text-white rounded-full mt-2">
            Create my account
          </Button>
        </form>

        <div className="mt-6 text-sm text-gray-700 text-center">
          Already have an account?{" "}
          <button
            onClick={() => showOnly("email")}
            className="underline hover:text-blue-600"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
