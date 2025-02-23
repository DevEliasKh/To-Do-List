import "./App.css";

import DeleteIcon from "./assets/DeleteIcon.svg?react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Tasks = Array<Task | null | undefined>;
interface Task {
   id?: string;
   value?: string;
   completed?: boolean;
}

function App() {
   const [tasks, setTasks] = useState<Tasks>([]);
   const [task, setTask] = useState<Task | null>();
   const [inputValue, setInputValue] = useState("");
   const addTasks = () => setTasks([...tasks, task]);
   const addTask = (value: React.ChangeEvent<HTMLInputElement>) => {
      const uniqueId = uuidv4();
      setInputValue(value.target.value);
      setTask({ value: inputValue, completed: false, id: uniqueId });
   };
   const emptyTask = () => setInputValue("");

   const removeTask = (id: string | undefined) => {
      const newTasks = tasks.filter((task) => {
         return task?.id != id;
      });
      setTasks(newTasks);
   };

   const toggleTaskCompletion = (id: string | undefined) => {
      const newTasks = tasks.map((task) => {
         if (task && task.id == id) {
            task.completed = !task?.completed;
            return task;
         }
      });
      setTasks(newTasks);
   };

   return (
      <>
         <main className="flex flex-col gap-10 h-full">
            <header>
               <h1>TODO List</h1>
            </header>

            <form className="flex gap-4">
               <input
                  type="text"
                  onChange={addTask}
                  className="border-2 px-1 py-2 rounded-lg"
                  value={inputValue}
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
                        <div key={task?.id} className="flex gap-2">
                           <input
                              type="checkbox"
                              id={task?.value}
                              name={task?.value}
                              defaultChecked={task?.completed}
                              defaultValue={task?.value}
                              onChange={() => toggleTaskCompletion(task?.id)}
                           />
                           <label
                              htmlFor={task?.value}
                              className="strikethrough"
                           >
                              {task?.value}
                           </label>
                           <DeleteIcon
                              className="w-6 h-6"
                              onClick={() => removeTask(task?.id)}
                           />
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
