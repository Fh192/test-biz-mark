import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import branchIcon from '../../../../../assets/branch.svg';
import burgerIcon from '../../../../../assets/burger.svg';
import playIcon from '../../../../../assets/play.svg';
import playActiveIcon from '../../../../../assets/playActive.svg';
import { useDispatch, useTimer } from '../../../../../hooks';
import {
  setCompletionDate,
  toggleCompletion,
} from '../../../../../store/reducers/kanbanSlice';
import { ITask } from '../../../../../types/task';
import { Checkbox } from '../../../../shared/Checkbox/Checkbox';
import { Subtasks } from '../../../Subtasks/Subtasks';
import { TaskDetails } from '../../../TaskDetails/TaskDetails';
import { TaskTime } from '../../../TaskTime/TaskTime';
import { Deadline } from './Deadline/Deadline';
import styles from './Task.module.scss';

interface Props {
  task: ITask;
  index: number;
}

export const Task: React.FC<Props> = ({ task, index }) => {
  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  const { id, title, subtasksIds, completed, executor, deadline } = task;

  const { started, toggleTimer } = useTimer(id);

  const [showSubtasks, setShowSubtasks] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const setShowSubtasksHandler = () => {
    setShowSubtasks(showSubtasks => !showSubtasks);
  };

  const openTaskDetails = () => {
    setShowTaskDetails(true);
  };

  const closeTaskDetails = () => {
    setShowTaskDetails(false);
  };

  const toggleCompletionHandler = () => {
    const completionDate = !completed ? new Date().toISOString() : null;

    dispatch(toggleCompletion({ id, completionFor: 'tasks' }));
    dispatch(setCompletionDate({ date: completionDate, taskId: id }));
  };

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {({ draggableProps, dragHandleProps, innerRef }) => (
          <li
            className={styles.task}
            ref={innerRef}
            {...draggableProps}
            {...dragHandleProps}
          >
            <header className={styles.header}>
              <div className={styles.inner}>
                <Checkbox
                  checked={completed}
                  onChange={toggleCompletionHandler}
                />
                <h2 className={styles.title}>{title}</h2>
              </div>
              <img
                className={styles.openDetails}
                src={burgerIcon}
                alt='детали'
                onClick={openTaskDetails}
              />
            </header>
            <footer className={styles.footer}>
              <div className={styles.inner}>
                <img
                  src={executor.avatar}
                  alt={executor.name}
                  className={styles.executor}
                />
                <div className={styles.dates}>
                  <TaskTime taskId={id} />
                  <Deadline deadline={deadline} />
                </div>
              </div>
              <div className={styles.inner}>
                {!!subtasksIds.length && (
                  <button
                    className={cx('showSubtasks', {
                      subtasksVisible: showSubtasks,
                    })}
                    onClick={setShowSubtasksHandler}
                  >
                    <span>{subtasksIds.length}</span>
                    <img src={branchIcon} alt='' />
                  </button>
                )}
                <button
                  className={cx('timer', { started })}
                  onClick={toggleTimer}
                >
                  <img src={started ? playActiveIcon : playIcon} alt='play' />
                </button>
              </div>
            </footer>
            {showSubtasks && (
              <div className={styles.subtasks}>
                <Subtasks subtasksIds={subtasksIds} taskId={id} />
              </div>
            )}
          </li>
        )}
      </Draggable>

      {showTaskDetails && <TaskDetails task={task} close={closeTaskDetails} />}
    </>
  );
};
