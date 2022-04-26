import { RootState } from '..';
import { IColumn, ISubtask, ITask, ITaskTime } from '../../types/task';

export const getColumn =
  (columnId: string) =>
  (state: RootState): IColumn => {
    return state.kanban.columns[columnId];
  };

export const getColumnTasks =
  (columnId: string) =>
  (state: RootState): ITask[] => {
    const { tasks } = state.kanban;
    const column = getColumn(columnId)(state);

    return column.tasksIds.map(taskId => tasks[taskId]);
  };

export const getSubtask =
  (id: string) =>
  (state: RootState): ISubtask => {
    return state.kanban.subtasks[id];
  };

export const getTaskTime =
  (id: string) =>
  (state: RootState): ITaskTime => {
    return state.kanban.tasks[id].time;
  };

export const getSpentTime =
  (id: string) =>
  (state: RootState): number => {
    return getTaskTime(id)(state).spent;
  };

export const getLastTaskCompletionDate = (state: RootState): string => {
  const tasks = Object.values(state.kanban.tasks);
  const dates: number[] = [];

  tasks.forEach(({ completionDate }) => {
    if (completionDate) {
      dates.push(Number(new Date(completionDate)));
    }
  });

  if (dates.length) {
    return new Date(Math.max(...dates)).toISOString();
  } else {
    return '';
  }
};
