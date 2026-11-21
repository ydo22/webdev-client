"use client";

import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};
const input = "rounded border border-neutral-300 px-2 py-1";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op = operation) => {
    const params = new URLSearchParams({ a, b, operation: op });
    try {
      const response = await fetch(`/api/lab5/calculator?${params}`);
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? `HTTP ${response.status}`);
        setResult("");
        return;
      }
      setError("");
      setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setResult("");
    }
  };

  return (
    <div id="wd-calculator-next-api">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calculator-a">A:</label>
        <input
          id="wd-calculator-a"
          type="number"
          className={`${input} w-24`}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <label htmlFor="wd-calculator-b">B:</label>
        <input
          id="wd-calculator-b"
          type="number"
          className={`${input} w-24`}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <label htmlFor="wd-calculator-operation">Operation:</label>
        <select
          id="wd-calculator-operation"
          className={input}
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}
        >
          {Object.entries(SYMBOLS).map(([op, symbol]) => (
            <option key={op} value={op}>
              {symbol}
            </option>
          ))}
        </select>
        <button
          type="button"
          id="wd-calculator-calculate"
          className="cursor-pointer rounded border-0 bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate()}
        >
          Calculate
        </button>
      </div>
      <input
        id="wd-calculator-result"
        readOnly
        className={`${input} w-full max-w-md bg-neutral-50`}
        value={result}
        placeholder="Result"
      />
      {error && (
        <p id="wd-calculator-error" className="mt-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}
      <hr />
    </div>
  );
}
