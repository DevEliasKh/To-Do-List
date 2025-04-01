export type Tasks = Array<Task | undefined>;

export interface Task {
   id?: string;
   value?: string;
   completed?: boolean;
}

export type TasksStore = {
   tasks: Tasks;
   addTasks: (task: Task) => void;
   removeTask: (id: string) => void;
   toggleTaskCompletion: (id: string) => void;
};
