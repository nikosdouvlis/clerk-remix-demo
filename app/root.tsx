import type { MetaFunction } from "remix";
import { Links, LiveReload, LoaderFunction, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "remix";
import { ConnectClerk } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { VisualWrapper } from "~/components/VisualWrapper";
import { HeaderLinks } from "~/components/HeaderLinks";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(
    args,
    ({ auth }) => {
      const { userId, sessionId, getToken } = auth;
      console.log("rootAuthLoader auth:", { userId, sessionId, getToken });
      return { message: `Hello from the root loader :)` };
    },
    { loadUser: true }
  );

function App() {
  const { message } = useLoaderData();

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
          <pre>{message}</pre>
          <Outlet />
        </VisualWrapper>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export default ConnectClerk(App, { frontendApi: "clerk.renewing.hermit-14.lcl.dev" });
