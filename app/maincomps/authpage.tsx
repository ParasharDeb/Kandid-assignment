'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Googleicon from "../icons/google";
import EmailIcon from "../icons/email";
import { useAuthStore } from "../store/useAuthStore";
import { signInGoogle } from "@/lib/auth-client";

export default function Authpage() {
  const showOnly = useAuthStore((state) => state.showOnly);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="backdrop-blur-lg min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-2xl px-5 py-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-2">Continue with an account</h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
          You must log in or register to continue.
        </p>
        <div className="w-full flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full"
            type="button"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            onClick={async () => {
              setError(null);
              setIsSubmitting(true);
              try {
                await signInGoogle();
              } catch (err) {
                const message = err instanceof Error ? err.message : "Google sign-in failed.";
                setError(message);
                // eslint-disable-next-line no-console
                console.error(err);
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <Googleicon />
            {isSubmitting ? "Continuing..." : "Continue with Google"}
          </Button>
          {error && (
            <p className="text-red-600 text-sm" role="alert">{error}</p>
          )}
          <Button
            className="w-full bg-blue-700"
            onClick={() => showOnly("email")}
          >
            <EmailIcon />
            Login with Email
          </Button>
        </div>
        <div className="mt-6 text-sm text-gray-700">
          New User?{" "}
          <span
            className="underline hover:text-blue-600 cursor-pointer"
            onClick={() => showOnly("register")}
          >
            Create New Account
          </span>
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
