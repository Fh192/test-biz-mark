import React from 'react';
import { useSelector } from '../../../hooks';
import { getLastTaskCompletionDate } from '../../../store/selectors/kanban';
import { transformDate } from '../../../utils/transformDate';
import styles from './LastTaskCompletionDate.module.scss';

export const LastTaskCompletionDate: React.FC = () => {
  const lastTaskCompletionDate = useSelector(getLastTaskCompletionDate);

  const getMessage = () => {
    if (lastTaskCompletionDate) {
      const { dayMonthDate } = transformDate(lastTaskCompletionDate);
      return `Последняя задача выполнена ${dayMonthDate}`;
    } else {
      return 'Нет выполненных задач';
    }
  };

  return <h3 className={styles.lastTask}>{getMessage()}</h3>;
};
