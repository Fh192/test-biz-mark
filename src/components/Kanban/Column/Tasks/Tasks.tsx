import React, { useState } from 'react';
import { useDispatch, useSelector } from '../../../../hooks';
import { addTask } from '../../../../store/reducers/kanbanSlice';
import { getColumnTasks } from '../../../../store/selectors/kanban';
import { ITaskToAdd } from '../../../../types/task';
import { Task } from './Task/Task';
import styles from './Tasks.module.scss';

interface Props {
  columnId: string;
  placeholder?: React.ReactElement<HTMLElement> | null | undefined;
}

export const Tasks: React.FC<Props> = ({ columnId, placeholder }) => {
  const dispatch = useDispatch();

  const tasks = useSelector(getColumnTasks(columnId));
  const { avatar, name } = useSelector(s => s.user);

  const [taskTitle, setTaskTitle] = useState('');

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskTitle) {
      const partialTask: ITaskToAdd = {
        title: taskTitle,
        executor: {
          avatar,
          name,
        },
      };

      dispatch(addTask({ columnId, partialTask }));
      setTaskTitle('');
    }
  };

  return (
    <div className={styles.tasks}>
      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={task.id} />
        ))}
        {placeholder}
      </ul>
      <div className={styles.addTask}>
        <input
          className={styles.input}
          type='text'
          placeholder='Введите название...'
          value={taskTitle}
          onChange={titleChangeHandler}
          onKeyDown={submitHandler}
        />
      </div>
    </div>
  );
};
