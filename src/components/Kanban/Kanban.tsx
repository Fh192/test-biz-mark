import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import filterIcon from '../../assets/filter.svg';
import sortIcon from '../../assets/sort.svg';
import { useDate, useSelector } from '../../hooks';
import { reorderTasks } from '../../store/reducers/kanbanSlice';
import { getLastTaskCompletionDate } from '../../store/selectors/kanban';
import { AddColumn } from './AddColumn/AddColumn';
import { Column } from './Column/Column';
import styles from './Kanban.module.scss';

export const Kanban: React.FC = () => {
  const dispatch = useDispatch();

  const { columnsOrder } = useSelector(s => s.kanban);
  const lastTaskCompletionDate = useSelector(getLastTaskCompletionDate);
  const { dateAsDayMonth } = useDate(lastTaskCompletionDate);

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
    <section className={styles.kanban}>
      <header className={styles.header}>
        <h3 className={styles.lastTask}>
          Последняя задача выполнена {dateAsDayMonth}
        </h3>
        <div className={styles.toolbar}>
          <button>
            <img src={filterIcon} alt='' />
            Фильтрация
          </button>
          <button>
            <img src={sortIcon} alt='' />
            Сортировка
          </button>
        </div>
      </header>

      <DragDropContext onDragEnd={dragEndHandler}>
        <ul className={styles.columns}>
          {columnsOrder.map(columnId => (
            <Column columnId={columnId} key={columnId} />
          ))}
          <AddColumn />
        </ul>
      </DragDropContext>
    </section>
  );
};
