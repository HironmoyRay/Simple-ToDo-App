import { useState } from "react";
import AddToTask from "./components/addToTask";
import TaskList from "./components/taskList";
import { initialTasks } from "./data/initialTasks";

let nextId = 4;

function App() {
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

  const handleAddTask = (text) => {
    setTasks([...tasks, { name: text, done: false, id: nextId++ }]);
  };

  return (
    <>
      <div>
        <h1>Simple To Do App</h1>
        <AddToTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
