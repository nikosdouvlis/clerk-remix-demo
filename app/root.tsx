import type { MetaFunction } from "remix";
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import { SignedOut, UserButton } from "@clerk/remix";
import { VisualWrapper } from "~/components/VisualWrapper";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <VisualWrapper color={"green"}>
          <h1>Index (root) route</h1>
          <HeaderLinks />
          <h2>Data returned from root loader: </h2>
          <Outlet />
        </VisualWrapper>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function HeaderLinks() {
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
        </SignedOut>
      </ul>
    </div>
  );
}
