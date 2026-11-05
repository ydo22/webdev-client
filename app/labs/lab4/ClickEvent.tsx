"use client";

const hello = () => {
  alert("Hello World!");
};

const goodbye = () => {
  alert("Goodbye World!");
};

const name = () => {
    alert("My name is Shankul Upadhyay")
}

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <br />
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <br />
      <button
        type="button"
        onClick={name}
        id="wd-my-button"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click for Name
      </button>
      <hr />
    </div>
  );
}