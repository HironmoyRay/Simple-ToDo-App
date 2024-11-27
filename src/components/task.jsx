import { useState } from "react";

export default function Task({ task }) {
  const { id, name, done } = task;
  const [isEditing, setIsEditing] = useState(false);
  const textArea = isEditing ? (
    <>
      {name}
      <button onClick={() => setIsEditing(false)}>Edit</button>
    </>
  ) : (
    <>
      <input type="text" />
      <button onClick={() => setIsEditing(true)}>Save</button>
    </>
  );
  return (
    <>
      <input type="checkbox" checked={done} />
      {textArea}
      <button>Delete</button>
    </>
  );
}
