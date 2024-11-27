import { useState } from "react";
import { initialTasks } from "../data/initialTasks";
import Task from "./task";

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleChangeTask = (editTask) => {
    let newTasks = tasks.map((task) => {
      if (task.id === editTask.id) {
        return {
          ...task,
          name: editTask.name,
          done: editTask.done,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
