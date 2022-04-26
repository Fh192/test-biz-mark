import classNames from 'classnames/bind';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from '../../../../hooks';
import { toggleCompletion } from '../../../../store/reducers/kanbanSlice';
import { ISubtask } from '../../../../types/task';
import { Checkbox } from '../../../shared';
import styles from './Subtask.module.scss';

interface Props extends ISubtask {
  index: number;
}

export const Subtask: React.FC<Props> = ({
  id,
  title,
  completed,
  executor,
  index,
}) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  const toggleCompletionHandler = () => {
    dispatch(toggleCompletion({ id, completionFor: 'subtasks' }));
  };

  return (
    <Draggable draggableId={id} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <li
          className={cx(['subtask', { completed }])}
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
        >
          <div className={styles.inner}>
            <Checkbox checked={completed} onChange={toggleCompletionHandler} />
            <h2 className={styles.title}>{title}</h2>
          </div>
          <img
            className={styles.avatar}
            src={executor.avatar}
            alt={executor.name}
          />
        </li>
      )}
    </Draggable>
  );
};
