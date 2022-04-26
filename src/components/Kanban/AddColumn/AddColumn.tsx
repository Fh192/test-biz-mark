import React, { useState } from 'react';
import plusIcon from '../../../assets/plus.svg';
import { useDispatch } from '../../../hooks';
import { addColumn } from '../../../store/reducers/kanbanSlice';
import styles from './AddColumn.module.scss';

export const AddColumn: React.FC = () => {
  const dispatch = useDispatch();
  const [columnTitle, setColumnTitle] = useState('');

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  };

  const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && columnTitle) {
      dispatch(addColumn(columnTitle));
      setColumnTitle('');
    }
  };

  return (
    <li className={styles.column}>
      <div className={styles.inner}>
        <img className={styles.plus} src={plusIcon} alt='' />
        <input
          className={styles.input}
          type='text'
          placeholder='Добавить столбец'
          value={columnTitle}
          onChange={titleChangeHandler}
          onKeyDown={submitHandler}
        />
      </div>
    </li>
  );
};
