import { useUser } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, Outlet, useCatch, useLoaderData } from "remix";

import { VisualWrapper } from "~/components/VisualWrapper";

export const loader: LoaderFunction = async ({ request }) => {
  const { userId, sessionId } = await getAuth(request);
  // use auth ids to fetch data:
  const messages = ["hello", "there"];
  return messages;
};

export default function Posts() {
  const { isSignedIn, isLoaded, user } = useUser();
  const data = useLoaderData();

  return (
    <VisualWrapper color={"red"}>
      <h1>Profile route</h1>
      <h2>Loader data:</h2>
      <pre>{JSON.stringify(data, null, 0)}</pre>
      <hr />
      <h2>User data:</h2>
      <pre>
        {JSON.stringify({ isLoaded, isSignedIn, user }, null, 1).slice(0, 150)} <br /> ...
      </pre>
      <Outlet />
    </VisualWrapper>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <div>
      <h1>Profile CatchBoundary</h1>
      <pre>{JSON.stringify(caught)}</pre>
    </div>
  );
}
