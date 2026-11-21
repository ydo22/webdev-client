"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "me-2 rounded border border-neutral-300 px-2 py-1";
const button =
  "me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const calculator = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <div className="mb-2">
        <input
          type="number"
          className={input}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          className={input}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <a id="wd-query-parameter-add" className={button} href={calculator("add")}>
        Add {a} + {b}
      </a>
      <a
        id="wd-query-parameter-subtract"
        className={button}
        href={calculator("subtract")}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-query-parameter-multiply"
        className={button}
        href={calculator("multiply")}
      >
        Multiply {a} × {b}
      </a>
      <a
        id="wd-query-parameter-divide"
        className={button}
        href={calculator("divide")}
      >
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
