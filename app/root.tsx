import type { MetaFunction } from "remix";
import { Links, LiveReload, LoaderFunction, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "remix";
import { ClerkProvider } from "@clerk/remix";
import { rootAuthLoader, WithClerkState } from "@clerk/remix/ssr.server";
import { VisualWrapper } from "~/components/VisualWrapper";
import { HeaderLinks } from "~/components/HeaderLinks";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(
    args,
    ({ auth, user }) => {
      const { userId, sessionId, getToken } = auth;
      console.log("rootAuthLoader auth", { userId, sessionId, getToken });
      console.log("rootAuthLoader user", user);
      return `Hello from the root loader :)`;
    },
    { loadUser: true }
  );

export default function App() {
  const { data, clerkState } = useLoaderData<WithClerkState<string>>();

  return (
    <ClerkProvider frontendApi={"clerk.renewing.hermit-14.lcl.dev"} clerkState={clerkState}>
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
            <pre>{data}</pre>
            <Outlet />
          </VisualWrapper>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ClerkProvider>
  );
}
