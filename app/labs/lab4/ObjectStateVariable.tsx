"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    city: { name: "Boston", state: "Massachusetts" },
  });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="wd-person-name"
      />
      <input
        type="number"
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
        id="wd-person-age"
      />
      <input
        className="mb-2 mt-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.city.name}
        onChange={(e) =>
          setPerson({ ...person, city: { ...person.city, name: e.target.value } })
        }
        id="wd-city-name"
      />
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.city.state}
        onChange={(e) =>
          setPerson({ ...person, city: { ...person.city, state: e.target.value } })
        }
        id="wd-city-state"
      />
      <hr />
    </div>
  );
}