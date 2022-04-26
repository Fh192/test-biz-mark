import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from '../../../hooks';
import { reorderSubtasks } from '../../../store/reducers/kanbanSlice';
import { Subtask } from './Subtask/Subtask';
import styles from './Subtasks.module.scss';

interface Props {
  subtasksIds: string[];
  taskId: string;
}

export const Subtasks: React.FC<Props> = ({ subtasksIds, taskId }) => {
  const dispatch = useDispatch();
  const { subtasks } = useSelector(s => s.kanban);

  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) return;

    dispatch(
      reorderSubtasks({
        taskId: result.source.droppableId,
        index: result.source.index,
        droppableIndex: result.destination.index,
      })
    );
  };
  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId={taskId} type='SUBTASK'>
        {({ droppableProps, innerRef, placeholder }) => (
          <ul className={styles.subtasks} {...droppableProps} ref={innerRef}>
            {subtasksIds.map((id, index) => {
              const subtask = subtasks[id];

              return <Subtask {...subtask} index={index} key={subtask.id} />;
            })}
            {placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
