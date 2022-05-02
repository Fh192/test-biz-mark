import classNames from 'classnames/bind';
import React from 'react';
import arrowBackIcon from '../../../../assets/arrowBack.svg';
import checkMarkIcon from '../../../../assets/checkMark.svg';
import linkIcon from '../../../../assets/link.svg';
import playIcon from '../../../../assets/play.svg';
import { useDispatch, useTimer } from '../../../../hooks';
import { toggleCompletion } from '../../../../store/reducers/kanbanSlice';
import { ITask } from '../../../../types/task';
import { TaskTime } from '../../TaskTime/TaskTime';
import styles from './Header.module.scss';

interface Props extends Pick<ITask, 'time' | 'id' | 'completed'> {
  close: () => void;
}

export const Header: React.FC<Props> = ({ id, completed, close }) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  const { started, toggleTimer } = useTimer(id);

  const toggleTaskCompletionHandler = () => {
    dispatch(toggleCompletion({ id, completionFor: 'tasks' }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button
          className={cx(['button', 'startTimer'], { started })}
          onClick={toggleTimer}
        >
          <img src={playIcon} alt='' />
          Работать над задачей
        </button>
        <TaskTime taskId={id} />
      </div>
      <div className={styles.inner}>
        {!completed && (
          <button
            className={cx(['button', 'completeTask'])}
            onClick={toggleTaskCompletionHandler}
          >
            <img src={checkMarkIcon} alt='' />
            Завершить задачу
          </button>
        )}

        <div className={styles.icons}>
          <button className={styles.close}>
            <img src={linkIcon} alt='копировать' />
          </button>
          <button className={styles.close} onClick={close}>
            <img src={arrowBackIcon} alt='закрыть' />
          </button>
        </div>
      </div>
    </header>
  );
};
