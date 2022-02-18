import { useUser } from "@clerk/remix";
import { Outlet } from "remix";

import { VisualWrapper } from "~/components/VisualWrapper";

export default function Posts() {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <VisualWrapper color="blue">
      <h1>Nested profile route</h1>
      <h2>Loader data:</h2>
      <pre>This page does not use a loader, but SSR still works:</pre>
      <hr />
      <h2>User data:</h2>
      <pre>
        {JSON.stringify({ isLoaded, isSignedIn, user }, null, 1).slice(0, 150)} <br /> ...
      </pre>
      <Outlet />
    </VisualWrapper>
  );
}
