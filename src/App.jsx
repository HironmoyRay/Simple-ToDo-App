import { useState } from "react";
import "./App.css";
import AddToTask from "./components/addToTask";
import TaskList from "./components/taskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Simple To Do App</h1>
        <AddToTask />
        <TaskList />
      </div>
    </>
  );
}

export default App;
