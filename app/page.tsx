
import Authpage from "./maincomps/authpage";
import EmailAuth from "./maincomps/emailauth";
import Register from "./maincomps/register";
export default function Home() {
  return (
    <div>
      {/* Landing page logic */}
      <Register/>
      <EmailAuth/>
    </div>
  );
}
