'use client'

import { Button } from "@/components/ui/button"; // shadcn Button
import Link from "next/link";

export default function Authpage() {
  return (
    <div className="backdrop-blur-lg min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-2xl px-5 py-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-2">Continue with an account</h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
          You must log in or register to continue.
        </p>
        <div className="w-full flex flex-col gap-4">
          <Button variant="outline" className="w-full">
            {/* Google icon can be added here if using an icon library */}
            Continue with Google
          </Button>
          <Button className="w-full bg-blue-700">
            Login with Email
          </Button>
        </div>
        <div className="mt-6 text-sm text-gray-700">
          New User?{" "}
          <Link href="#" className="underline hover:text-blue-600">
            Create New Account
          </Link>
        </div>
        <div className="mt-4 text-xs text-gray-500 text-center">
          By continuing, you agree to our{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline">
            T&Cs
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
5