import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from '../../../hooks';
import { reorderSubtasks } from '../../../store/reducers/kanbanSlice';
import { Subtask } from './Subtask/Subtask';
import styles from './Subtasks.module.scss';

interface Props {
  subtasksIds: string[];
  taskId: string;
  setTaskDragDisable?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Subtasks: React.FC<Props> = ({
  subtasksIds,
  taskId,
  setTaskDragDisable,
}) => {
  const dispatch = useDispatch();
  const { subtasks } = useSelector(s => s.kanban);

  const dragEndHandler = (result: DropResult) => {
    if (result.destination) {
      dispatch(
        reorderSubtasks({
          taskId: result.source.droppableId,
          index: result.source.index,
          droppableIndex: result.destination.index,
        })
      );
    }
  };

  const hoverHandler = (mode: 'enter' | 'leave') => () => {
    if (setTaskDragDisable) {
      setTaskDragDisable(mode === 'enter');
    }
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId={taskId} type='SUBTASK'>
        {({ droppableProps, innerRef, placeholder }) => (
          <ul
            {...droppableProps}
            className={styles.subtasks}
            onMouseEnter={hoverHandler('enter')}
            onMouseLeave={hoverHandler('leave')}
            ref={innerRef}
          >
            {subtasksIds.map((id, index) => (
              <Subtask {...subtasks[id]} index={index} key={id} />
            ))}
            {placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
