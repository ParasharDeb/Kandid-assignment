'use client';
import Authpage from "./maincomps/authpage";
import Dashboard from "./maincomps/dashboard";
import Register from "./maincomps/register";
import EmailAuth from "./maincomps/emailauth";
import { useAuthStore } from "./store/useAuthStore";

export default function Home() {
  const { ShowAuth, ShowRegister, showEmail } = useAuthStore();

  if (ShowAuth) return <Authpage />;
  if (ShowRegister) return <Register />;
  if (showEmail) return <EmailAuth />;
  return <Dashboard />;
}
