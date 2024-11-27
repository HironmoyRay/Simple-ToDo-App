import { useState } from "react";

export default function Task({ task, onChangeTask, onDeleteTask }) {
  //   const { id, name, done } = task;
  const [isEditing, setIsEditing] = useState(false);
  const textArea = isEditing ? (
    <>
      <input
        type="text"
        value={task.name}
        onChange={(e) =>
          onChangeTask({
            ...task,
            name: e.target.value,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.name}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChangeTask({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {textArea}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  );
}
