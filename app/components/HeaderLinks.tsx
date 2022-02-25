import { SignedOut, UserButton } from "@clerk/remix";
import { Link } from "remix";

export function HeaderLinks() {
  return (
    <div>
      <UserButton afterSignOutAllUrl="/" />
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/profile/nested-page">Profile/nested-page</Link>
        </li>
        <SignedOut>
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </SignedOut>
      </ul>
    </div>
  );
}
