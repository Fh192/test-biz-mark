import React, { useRef } from 'react';
import { useOnClickOutside } from '../../../hooks';
import { ITask } from '../../../types/task';
import { Comments } from './Comments/Comments';
import { Header } from './Header/Header';
import { Info } from './Info/Info';
import styles from './TaskDetails.module.scss';

interface Props {
  close: () => void;
  task: ITask;
}

export const TaskDetails: React.FC<Props> = ({ task, close }) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    id,
    completed,
    time,
    title,
    deadline,
    executor,
    subtasksIds,
    comments,
    description,
  } = task;

  useOnClickOutside(ref, close);

  return (
    <div className={styles.taskDetails} ref={ref}>
      <Header id={id} completed={completed} time={time} close={close} />
      <Info
        id={id}
        title={title}
        deadline={deadline}
        executor={executor}
        subtasksIds={subtasksIds}
        description={description}
      />
      <Comments taskId={id} comments={comments} />
    </div>
  );
};
