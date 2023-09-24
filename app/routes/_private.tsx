import { json, LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Header } from "~/components/header";

export const meta: V2_MetaFunction = () => [{ title: "info / ribeirolabs" }];

export async function loader(args: LoaderArgs) {
  return json({});
}

export default function Index() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
