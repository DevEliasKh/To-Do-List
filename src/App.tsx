import "./App.css";

import { useState } from "react";

type Tasks = Array<Task | null | undefined>;
interface Task {
   value: string;
   completed: boolean;
}

function App() {
   const [tasks, setTasks] = useState<Tasks>([]);
   const [task, setTask] = useState<Task | null>();

   const addTasks = () => setTasks([...tasks, task]);
   const addTask = (value: React.ChangeEvent<HTMLInputElement>) => {
      setTask({ value: value.target.value, completed: false });
   };
   const emptyTask = () => setTask(null);

   return (
      <>
         <main className="flex flex-col gap-10 h-full">
            <header>
               <h1>TODO List</h1>
            </header>

            <form className="flex gap-4">
               <input
                  type="text"
                  // value={task}
                  onChange={addTask}
                  className="border-2 px-1 py-2 rounded-lg"
               />
               <button
                  type="submit"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                     event.preventDefault();
                     addTasks();
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
                     return (
                        <div key={task?.value} className="flex gap-2">
                           <input
                              type="checkbox"
                              id={task?.value}
                              name={task?.value}
                              defaultChecked={task?.completed}
                              defaultValue={task?.value}
                           />
                           <label
                              htmlFor={task?.value}
                              className="strikethrough"
                           >
                              {task?.value}
                           </label>
                        </div>
                     );
                  })}
               </div>
            </div>
         </main>
      </>
   );
}

export default App;
