import Authpage from "./maincomps/authpage";
import Dashboard from "./maincomps/dashboard";
import { useAuthStore } from "./store/useAuthStore";

export default function Home() {
  const { ShowAuth } = useAuthStore();

  return ShowAuth ? <Authpage /> : <Dashboard />;
}
