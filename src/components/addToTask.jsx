import { useState } from "react";
export default function AddToTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Write the Name of your Task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Add Task
      </button>
    </>
  );
}
