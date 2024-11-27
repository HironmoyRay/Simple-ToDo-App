import { useState } from "react";
export default function AddToTask() {
  const [text, setText] = useState(" ");
  return (
    <>
      <input
        type="text"
        placeholder="Add your Task"
        value={text}
        onChange={(e) => {
        //   console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <button>Add Task</button>
    </>
  );
}
