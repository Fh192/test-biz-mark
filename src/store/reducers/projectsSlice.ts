import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProject } from '../../types/project';

interface State {
  projects: IProject[];
  currentProjectId: string;
}

const initialState: State = {
  projects: [
    {
      id: 'project-1',
      name: 'Электротовары',
      status: 'inProgress',
    },
    {
      id: 'project-2',
      name: 'Лесхозснаб',
      status: 'inProgress',
    },
    {
      id: 'project-3',
      name: 'Посуда-Сити',
      status: 'inProgress',
    },
    {
      id: 'project-4',
      name: 'Автошкола “Автолицей”',
      status: 'completed',
    },
    {
      id: 'project-5',
      name: 'Проект 5',
      status: 'completed',
    },
    {
      id: 'project-6',
      name: 'Проект 6',
      status: 'inProgress',
    },
  ],
  currentProjectId: 'project-1',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCurrentProjectId: (state, action: PayloadAction<string>) => {
      state.currentProjectId = action.payload;
    },
  },
});

export const { setCurrentProjectId } = projectsSlice.actions;
export default projectsSlice.reducer;
