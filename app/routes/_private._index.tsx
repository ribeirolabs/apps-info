import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function Index() {
  return (
    <div>
      <h1>Protected Index</h1>
    </div>
  );
}
