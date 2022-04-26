import React from 'react';
import { ITask } from '../../../../types/task';
import { AddSubtask } from '../../AddSubtask/AddSubtask';
import { Subtasks } from '../../Subtasks/Subtasks';
import { Details } from './Details/Details';
import styles from './Info.module.scss';

type Props = Pick<
  ITask,
  'title' | 'executor' | 'deadline' | 'subtasksIds' | 'id' | 'description'
>;

export const Info: React.FC<Props> = ({
  id,
  title,
  executor,
  deadline,
  subtasksIds,
  description,
}) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>{title}</h2>
      <Details
        id={id}
        executor={executor}
        deadline={deadline}
        description={description}
      />
      <div className={styles.subtasks}>
        <Subtasks subtasksIds={subtasksIds} taskId={id} />
        <AddSubtask taskId={id} />
      </div>
    </div>
  );
};
