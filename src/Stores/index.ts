import { createJSONStorage, persist } from "zustand/middleware";

import { create } from "zustand";

type Tasks = Array<Task | undefined>;

interface Task {
   id?: string;
   value?: string;
   completed?: boolean;
}

type TasksStore = {
   tasks: Tasks;
   addTasks: (task: Task) => void;
   removeTask: (id: string) => void;
   toggleTaskCompletion: (id: string) => void;
};

export const useTasksStore = create<TasksStore>()(
   persist(
      (set, get) => ({
         tasks: [],
         addTasks: (task) => set({ tasks: [task, ...get().tasks] }),
         removeTask: (id: string) =>
            set({
               tasks: get().tasks.filter((task) => task?.id != id),
            }),
         toggleTaskCompletion: (id: string) =>
            set({
               tasks: get().tasks.map((task) =>
                  task?.id == id
                     ? { ...task, completed: !task?.completed }
                     : task
               ),
            }),
      }),
      {
         name: "tasks-storage", // name of the item in the storage (must be unique)
         storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
   )
);
