import "./App.css";

import DeleteIcon from "./assets/DeleteIcon.svg?react";
import { useState } from "react";
import { useTasksStore } from "./Stores";
import { v4 as uuidv4 } from "uuid";

interface Task {
   id: string;
   value: string;
   completed: boolean;
}

function App() {
   const tasks = useTasksStore((state) => state.tasks);
   const [task, setTask] = useState<Task | null>();
   const [inputValue, setInputValue] = useState("");
   const addTasks = useTasksStore((state) => state.addTasks);
   const addTask = (value: React.ChangeEvent<HTMLInputElement>) => {
      const uniqueId = uuidv4();
      setInputValue(value.target.value);
      setTask({ value: value.target.value, completed: false, id: uniqueId });
   };
   const emptyTask = () => setInputValue("");

   const removeTask = useTasksStore((state) => state.removeTask);

   const toggleTaskCompletion = useTasksStore(
      (state) => state.toggleTaskCompletion
   );

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
                     if (task) {
                        addTasks(task);
                        emptyTask();
                     }
                  }}
               >
                  Add Task
               </button>
            </form>
            <div>
               <h2 className="text-3xl pb-4">Tasks</h2>
               <div className="flex flex-col gap-3">
                  {tasks.map((task) => {
                     return (
                        <div
                           key={task?.id}
                           className="flex justify-between gap-2 bg-gray-500 px-2 py-1 rounded"
                        >
                           <input
                              type="checkbox"
                              id={task!.value}
                              name={task!.value}
                              defaultChecked={task!.completed}
                              defaultValue={task!.value}
                              onChange={() =>
                                 toggleTaskCompletion(task!.id as string)
                              }
                           />
                           <label
                              htmlFor={task!.value}
                              className="strikethrough flex-grow text-left"
                           >
                              {task!.value}
                           </label>
                           <DeleteIcon
                              className="w-6 h-6"
                              onClick={() => removeTask(task!.id as string)}
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
