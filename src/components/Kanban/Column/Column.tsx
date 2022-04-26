import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import dotsIcon from '../../../assets/dots.svg';
import plusIcon from '../../../assets/plus.svg';
import { useDispatch, useSelector } from '../../../hooks';
import { deleteColumn } from '../../../store/reducers/kanbanSlice';
import { getColumn } from '../../../store/selectors/kanban';
import styles from './Column.module.scss';
import { Tasks } from './Tasks/Tasks';

interface Props {
  columnId: string;
}

export const Column: React.FC<Props> = ({ columnId }) => {
  const dispatch = useDispatch();

  const column = useSelector(getColumn(columnId));

  return (
    <Droppable droppableId={columnId} type='TASK'>
      {({ droppableProps, innerRef, placeholder }) => (
        <li className={styles.column} {...droppableProps} ref={innerRef}>
          <header className={styles.header}>
            <h2 className={styles.title}>{column.title}</h2>
            <div className={styles.options}>
              <button>
                <img src={plusIcon} alt='' />
              </button>
              <button onClick={() => dispatch(deleteColumn(columnId))}>
                <img src={dotsIcon} alt='' />
              </button>
            </div>
          </header>
          <Tasks columnId={columnId} placeholder={placeholder} />
        </li>
      )}
    </Droppable>
  );
};
