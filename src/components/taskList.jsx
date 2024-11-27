import { useState } from "react";
import { initialTasks } from "../data/initialTasks";
import Task from "./task";

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}
