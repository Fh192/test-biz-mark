import React from 'react';
import { useSelector } from '../../../../../hooks';
import { getCurrentProject } from '../../../../../store/selectors/project';
import { ITask } from '../../../../../types/task';
import { transformDate } from '../../../../../utils/transformDate';
import { SetDeadline } from '../../../SetDeadline/SetDeadline';
import { Description } from './Description/Description';
import styles from './Details.module.scss';

type Props = Pick<ITask, 'executor' | 'deadline' | 'id' | 'description'>;

export const Details: React.FC<Props> = ({
  id,
  executor,
  deadline,
  description,
}) => {
  const { name: projectName } = useSelector(getCurrentProject);

  return (
    <div className={styles.details}>
      <h3 className={styles.rowName}>Исполнитель</h3>
      <div className={styles.executor}>
        <img className={styles.executorAvatar} src={executor.avatar} alt='' />
        <span className={styles.executorName}>{executor.name}</span>
      </div>

      <h3 className={styles.rowName}>Даты</h3>
      <div className={styles.deadline}>
        <SetDeadline deadline={deadline} deadlineFor='tasks' id={id} />
        <span>{transformDate(deadline).fullDate}</span>
      </div>

      <h3 className={styles.rowName}>Проект</h3>
      <span>{projectName}</span>

      <h3 className={styles.rowName}>Описание</h3>
      <Description description={description} id={id} />
    </div>
  );
};
