import { RootState } from '..';
import { IProject } from '../../types/project';

export const getCurrentProject = (state: RootState): IProject => {
  const { currentProjectId, projects } = state.projects;

  return projects.find(({ id }) => id === currentProjectId) as IProject;
};
