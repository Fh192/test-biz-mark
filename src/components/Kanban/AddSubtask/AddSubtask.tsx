import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import plusIcon from '../../../assets/plus.svg';
import { useDispatch, useSelector } from '../../../hooks';
import { addSubtask } from '../../../store/reducers/kanbanSlice';
import styles from './AddSubtask.module.scss';

interface Props {
  taskId: string;
}

export const AddSubtask: React.FC<Props> = ({ taskId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const { name, avatar } = useSelector(s => s.user);

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && title) {
      const partialSubtask = {
        title,
        executor: { name, avatar },
      };

      dispatch(addSubtask({ taskId, partialSubtask }));
      setTitle('');
    }
  };

  return (
    <button className={styles.addSubtask}>
      <img src={plusIcon} alt='' />
      <input
        className={styles.input}
        type='text'
        placeholder='Добавить подзадачу'
        value={title}
        onChange={titleChangeHandler}
        onKeyDown={keyDownHandler}
      />
    </button>
  );
};
