export default function PassingFunctions({
  message,
  name,
  theFunction,
  theNameFunction,
  theOtherFunction,
}: {
  message: string;
  name: string;
  theFunction: (message: string) => void;
  theNameFunction: (name: string) => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <button
        type="button"
        onClick={() => theNameFunction(`${name}`)}
        id="wd-my-name-function-button"
        className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke Name Function
      </button>
      <hr />
    </div>
  );
}