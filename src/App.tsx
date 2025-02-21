import "./App.css";

import { useState } from "react";

type Tasks = Array<string | undefined>;
type Task = string | undefined;

function App() {
   const [tasks, setTasks] = useState<Tasks>([]);
   const [task, setTask] = useState<Task>("");

   const addTasks = (value: string | undefined) => setTasks([...tasks, value]);
   const addTask = (value: React.ChangeEvent<HTMLInputElement>) => {
      setTask(value.target.value);
   };
   const emptyTask = () => setTask("");

   return (
      <>
         <main className="flex flex-col gap-10 h-full">
            <header>
               <h1>TODO List</h1>
            </header>

            <form className="flex gap-4">
               <input
                  type="text"
                  value={task}
                  onChange={addTask}
                  className="border-2 px-1 py-2 rounded-lg"
               />
               <button
                  type="submit"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                     event.preventDefault();
                     addTasks(task);
                     emptyTask();
                  }}
               >
                  Add Task
               </button>
            </form>
            <div>
               <h2 className="text-3xl pb-4">Tasks</h2>
               <div className="flex flex-col">
                  {tasks.map((task) => {
                     return <span key={task}>{task}</span>;
                  })}
               </div>
            </div>
         </main>
      </>
   );
}

export default App;
