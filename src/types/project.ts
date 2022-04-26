export type IProjectStatus = 'completed' | 'inProgress';

export interface IProject {
  id: string;
  name: string;
  status: IProjectStatus;
}
