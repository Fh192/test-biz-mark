import classNames from 'classnames/bind';
import React from 'react';
import { IProjectStatus } from '../../../types/project';
import styles from './ProjectStatus.module.scss';

interface Props {
  status: IProjectStatus;
}

export const ProjectStatus: React.FC<Props> = ({ status }) => {
  const cx = classNames.bind(styles);

  return <span className={cx(['status', status])} />;
};
