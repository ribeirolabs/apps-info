import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function loader(args: LoaderArgs) {
  return json({});
}

export const meta: V2_MetaFunction = () => [{ title: "Login" }];

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
