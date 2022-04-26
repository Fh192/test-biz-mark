import React from 'react';
import { useSelector } from '../../../hooks';
import { getTaskTime } from '../../../store/selectors/kanban';
import { convertTime, getTimeString } from '../../../utils';
import styles from './TaskTime.module.scss';

interface Props {
  taskId: string;
}

export const TaskTime: React.FC<Props> = ({ taskId }) => {
  const { spent, planned } = useSelector(getTaskTime(taskId));

  return (
    <div className={styles.time}>
      <div></div>
      <span>{getTimeString(convertTime(spent))}</span> /{' '}
      <span>{getTimeString(convertTime(planned))}</span>
    </div>
  );
};
