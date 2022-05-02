import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from '../../../hooks';
import { reorderTasks } from '../../../store/reducers/kanbanSlice';
import { AddColumn } from './AddColumn/AddColumn';
import { Column } from './Column/Column';
import styles from './Columns.module.scss';

export const Columns: React.FC = () => {
  const dispatch = useDispatch();

  const { columnsOrder } = useSelector(s => s.kanban);

  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    dispatch(
      reorderTasks({
        index: source.index,
        droppableIndex: destination.index,
        columnId: source.droppableId,
        droppableColumnId: destination.droppableId,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <ul className={styles.columns}>
        {columnsOrder.map(columnId => (
          <Column columnId={columnId} key={columnId} />
        ))}
        <AddColumn />
      </ul>
    </DragDropContext>
  );
};
