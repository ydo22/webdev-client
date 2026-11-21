"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

// Style 4 from §5.3: client.ts owns the URL, the component only calls it.
export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return (
    <div id="wd-hello-route">
      <h4>GET /api/lab5/hello (Next.js Route Handler)</h4>
      <pre className="rounded bg-neutral-100 p-2">{JSON.stringify(hello, null, 2)}</pre>
      {hello.message && (
        <p>
          Message: <b id="wd-hello-message">{hello.message}</b>
        </p>
      )}
      <hr />
    </div>
  );
}
