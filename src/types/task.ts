export interface IUser {
  name: string;
  avatar: string;
}

export interface IComment {
  id: string;
  author: IUser;
  text: string;
  date: string;
}

export interface ITaskTime {
  planned: number;
  spent: number;
}

export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  deadline: string;
  description: string;
  subtasksIds: string[];
  completionDate: string | null;
  executor: IUser;
  time: ITaskTime;
  comments: IComment[];
}

export type ISubtask = Omit<
  ITask,
  'time' | 'subtasksIds' | 'comments' | 'description' | 'completionDate'
>;

export interface IColumn {
  id: string;
  title: string;
  tasksIds: string[];
}

export type ITaskToAdd = Pick<ITask, 'title' | 'executor'>;
export type ISubtaskToAdd = Pick<ITask, 'title' | 'executor'>;
