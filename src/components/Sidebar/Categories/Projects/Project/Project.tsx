import classNames from 'classnames/bind';
import React from 'react';
import { useDispatch, useSelector } from '../../../../../hooks';
import { setCurrentProjectId } from '../../../../../store/reducers/projectsSlice';
import { IProject } from '../../../../../types/project';
import { ProjectStatus } from '../../../../shared';
import styles from './Project.module.scss';

export const Project: React.FC<IProject> = project => {
  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  const { currentProjectId } = useSelector(s => s.projects);
  const { name, status, id } = project;
  const active = currentProjectId === id;

  const setCurrentProjectHandler = () => {
    dispatch(setCurrentProjectId(project.id));
  };

  return (
    <li
      className={cx(['item', { active }])}
      onClick={setCurrentProjectHandler}
      key={id}
    >
      <ProjectStatus status={status} />
      <span className={styles.title}>{name}</span>
    </li>
  );
};
