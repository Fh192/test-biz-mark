import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import {
  initialColumns,
  initialColumnsOrder,
  initialSubtasks,
  initialTasks,
} from '../../data/initialKanbanData';
import {
  IColumn,
  IComment,
  ISubtask,
  ISubtaskToAdd,
  ITask,
  ITaskToAdd,
  IUser,
} from '../../types/task';

interface State {
  columns: { [key in string]: IColumn };
  columnsOrder: string[];
  tasks: { [key in string]: ITask };
  subtasks: { [key in string]: ISubtask };
  lastTaskCompletionDate: string;
}

const initialState: State = {
  columns: initialColumns,
  columnsOrder: initialColumnsOrder,
  tasks: initialTasks,
  subtasks: initialSubtasks,
  lastTaskCompletionDate: '2022-03-09T20:00:00.000Z',
};

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<string>) => {
      const id = nanoid();
      const column: IColumn = {
        id,
        title: action.payload,
        tasksIds: [],
      };

      Object.assign(state.columns, { [id]: column });
      state.columnsOrder.push(id);
    },

    deleteColumn: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      delete state.columns[id];
      state.columnsOrder = state.columnsOrder.filter(
        columnId => columnId !== id
      );
    },

    addTask: (
      state,
      action: PayloadAction<{
        partialTask: ITaskToAdd;
        columnId: string;
      }>
    ) => {
      const id = nanoid();
      const { partialTask, columnId } = action.payload;

      const task: ITask = {
        ...partialTask,
        id,
        completed: false,
        description: '',
        deadline: new Date().toISOString(),
        completionDate: '',
        time: { planned: 0, spent: 0 },
        subtasksIds: [],
        comments: [],
      };

      state.tasks[id] = task;
      state.columns[columnId].tasksIds.unshift(id);
    },

    setSpentTime: (
      state,
      action: PayloadAction<{ taskId: string; seconds: number }>
    ) => {
      const { seconds, taskId } = action.payload;
      state.tasks[taskId].time.spent = seconds;
    },

    setCompletionDate: (
      state,
      action: PayloadAction<{ taskId: string; date: string | null }>
    ) => {
      const { taskId, date } = action.payload;

      state.tasks[taskId].completionDate = date;
    },

    addTaskComment: (
      state,
      action: PayloadAction<{ text: string; author: IUser; taskId: string }>
    ) => {
      const { taskId, text, author } = action.payload;
      const comment: IComment = {
        text,
        author,
        id: nanoid(),
        date: new Date().toISOString(),
      };

      state.tasks[taskId].comments.unshift(comment);
    },

    setTaskDescription: (
      state,
      action: PayloadAction<{ taskId: string; description: string }>
    ) => {
      const { taskId, description } = action.payload;

      state.tasks[taskId].description = description;
    },

    addSubtask: (
      state,
      action: PayloadAction<{ partialSubtask: ISubtaskToAdd; taskId: string }>
    ) => {
      const id = nanoid();
      const { partialSubtask, taskId } = action.payload;
      const subtask: ISubtask = {
        ...partialSubtask,
        id,
        completed: false,
        deadline: new Date().toISOString(),
      };

      state.subtasks[id] = subtask;
      state.tasks[taskId].subtasksIds.unshift(id);
    },

    setDeadline: (
      state,
      action: PayloadAction<{
        id: string;
        deadline: string;
        deadlineFor: 'tasks' | 'subtasks';
      }>
    ) => {
      const { id, deadline, deadlineFor } = action.payload;
      state[deadlineFor][id].deadline = deadline;
    },

    toggleCompletion: (
      state,
      action: PayloadAction<{ id: string; completionFor: 'tasks' | 'subtasks' }>
    ) => {
      const { id, completionFor } = action.payload;
      const task = state[completionFor][id];

      task.completed = !task.completed;
    },

    reorderTasks: (
      state,
      action: PayloadAction<{
        index: number;
        droppableIndex: number;
        columnId: string;
        droppableColumnId: string;
      }>
    ) => {
      const { index, droppableIndex, columnId, droppableColumnId } =
        action.payload;
      const tasksIds = state.columns[columnId].tasksIds;
      const droppableTasksIds = state.columns[droppableColumnId].tasksIds;

      const [reorderedItem] = tasksIds.splice(index, 1);
      droppableTasksIds.splice(droppableIndex, 0, reorderedItem);
    },

    reorderSubtasks: (
      state,
      action: PayloadAction<{
        index: number;
        droppableIndex: number;
        taskId: string;
      }>
    ) => {
      const { index, droppableIndex, taskId } = action.payload;
      const subtasksIds = state.tasks[taskId].subtasksIds;
      const droppableTasksIds = state.tasks[taskId].subtasksIds;

      const [reorderedItem] = subtasksIds.splice(index, 1);
      droppableTasksIds.splice(droppableIndex, 0, reorderedItem);
    },
  },
});

export const {
  addColumn,
  deleteColumn,
  addTask,
  addTaskComment,
  setTaskDescription,
  setCompletionDate,
  setSpentTime,
  addSubtask,
  setDeadline,
  toggleCompletion,

  reorderTasks,
  reorderSubtasks,
} = kanbanSlice.actions;

export default kanbanSlice.reducer;
