import { combineReducers } from '@reduxjs/toolkit';
import kanbanReducer from './kanbanSlice';
import projectsReducer from './projectsSlice';
import usersReducer from './userSlice';

export const rootReducer = combineReducers({
  kanban: kanbanReducer,
  projects: projectsReducer,
  user: usersReducer,
});
