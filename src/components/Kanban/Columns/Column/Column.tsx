import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './Column.module.scss';
import { ColumnHeader } from './ColumnHeader/ColumnHeader';
import { Tasks } from './Tasks/Tasks';

interface Props {
  columnId: string;
}

export const Column: React.FC<Props> = ({ columnId }) => {
  return (
    <Droppable droppableId={columnId} type='TASK'>
      {({ droppableProps, innerRef, placeholder }) => (
        <li className={styles.column} {...droppableProps} ref={innerRef}>
          <ColumnHeader columnId={columnId} />
          <Tasks columnId={columnId} placeholder={placeholder} />
        </li>
      )}
    </Droppable>
  );
};
