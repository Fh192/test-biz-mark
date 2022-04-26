import avatar1 from '../assets/avatar1.svg';
import avatar2 from '../assets/avatar2.svg';
import avatar3 from '../assets/avatar3.svg';
import { IColumn, ISubtask, ITask } from '../types/task';

export const initialColumns: { [key in string]: IColumn } = {
  'column-1': {
    id: 'column-1',
    title: 'Нужно сделать',
    tasksIds: ['task-1', 'task-2', 'task-3'],
  },
  'column-2': {
    id: 'column-2',
    title: 'В работе',
    tasksIds: ['task-4'],
  },
  'column-3': {
    id: 'column-3',
    title: 'Сделано',
    tasksIds: ['task-5', 'task-6'],
  },
  'column-4': {
    id: 'column-4',
    title: 'Завершено',
    tasksIds: ['task-7'],
  },
};

export const initialColumnsOrder: string[] = [
  'column-1',
  'column-2',
  'column-3',
  'column-4',
];

export const initialTasks: { [key in string]: ITask } = {
  'task-1': {
    id: 'task-1',
    title: 'Разработать новый чекаут для Юр. Лиц.',
    completed: false,
    deadline: '2022-11-11T00:00:00.000Z',
    completionDate: null,
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 122400,
      spent: 0,
    },
    comments: [
      {
        id: 'comment-1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet hendrerit ipsum vel gravida. Nullam auctor nisl leo, eu luctus ex eleifend nec. Praesent mauris odio, dapibus sit amet ipsum eget, venenatis tempus nisl.',
        author: { avatar: avatar1, name: 'Nick Khaetsky' },
        date: '2021-11-11T00:00:00.000Z',
      },
      {
        id: 'comment-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet hendrerit ipsum vel gravida. Nullam auctor nisl leo, eu luctus ex eleifend nec.',
        author: { avatar: avatar1, name: 'Nick Khaetsky' },
        date: '2021-11-11T00:00:00.000Z',
      },
    ],
    subtasksIds: [],
  },
  'task-2': {
    id: 'task-2',
    title: 'Проверить корзину',
    completed: false,
    deadline: '2022-04-19T00:00:00.000Z',
    completionDate: null,
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 36000,
      spent: 54000,
    },
    comments: [
      {
        id: 'comment-3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: { avatar: avatar1, name: 'Nick Khaetsky' },
        date: '2021-11-11T00:00:00.000Z',
      },
    ],
    subtasksIds: ['subtask-1', 'subtask-2'],
  },
  'task-3': {
    id: 'task-3',
    title: 'Исправить ошибку',
    completed: true,
    deadline: '2022-05-12T00:00:00.000Z',
    completionDate: '2021-02-11T00:00:00.000Z',
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 36000,
      spent: 54000,
    },
    comments: [],
    subtasksIds: [],
  },
  'task-4': {
    id: 'task-4',
    title: 'Правка',
    completed: true,
    deadline: '2022-12-31T00:00:00.000Z',
    completionDate: null,
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 36000,
      spent: 54000,
    },
    comments: [],
    subtasksIds: [],
  },
  'task-5': {
    id: 'task-5',
    title: 'Исправить ошибку',
    completed: false,
    deadline: '2022-04-19T00:00:00.000Z',
    completionDate: null,
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 36000,
      spent: 54000,
    },
    comments: [],
    subtasksIds: [],
  },
  'task-6': {
    id: 'task-6',
    title: 'Разработать новый чекаут для Юр. Лиц.',
    completed: false,
    deadline: '2022-04-19T00:00:00.000Z',
    completionDate: null,
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 36000,
      spent: 54000,
    },
    comments: [],
    subtasksIds: ['subtask-3'],
  },
  'task-7': {
    id: 'task-7',
    title: 'Исправить ошибку',
    completed: true,
    deadline: '2022-04-19T00:00:00.000Z',
    completionDate: '2021-01-12T00:00:00.000Z',
    description: '',
    executor: {
      name: 'Никита Хаецкий',
      avatar: avatar1,
    },
    time: {
      planned: 36000,
      spent: 54000,
    },
    comments: [],
    subtasksIds: ['subtask-4'],
  },
};

export const initialSubtasks: { [key in string]: ISubtask } = {
  'subtask-1': {
    id: 'subtask-1',
    title: 'Разработать прототип',
    completed: true,
    deadline: '2022-11-19T00:00:00.000Z',
    executor: {
      name: 'Пользователь 2',
      avatar: avatar2,
    },
  },
  'subtask-2': {
    id: 'subtask-2',
    title: 'Разработать бекенд',
    completed: false,
    deadline: '2022-12-01T00:00:00.000Z',
    executor: {
      name: 'Пользователь 3',
      avatar: avatar3,
    },
  },
  'subtask-3': {
    id: 'subtask-3',
    title: 'Разработать прототип',
    completed: false,
    deadline: '2022-01-22T00:00:00.000Z',
    executor: {
      name: 'Пользователь 2',
      avatar: avatar2,
    },
  },
  'subtask-4': {
    id: 'subtask-4',
    title: 'Проверить корзину',
    completed: false,
    deadline: '2022-12-31T00:00:00.000Z',
    executor: {
      name: 'Пользователь 3',
      avatar: avatar3,
    },
  },
};
