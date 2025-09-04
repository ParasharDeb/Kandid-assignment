
import Authpage from "./maincomps/authpage";
import EmailAuth from "./maincomps/emailauth";
import Register from "./maincomps/register";
export default function Home() {
  return (
    <div className="bg-yellow-100">
      {/* Landing page logic */}
      <EmailAuth/>
    </div>
  );
}
