import React from 'react';
import styles from './Options.module.scss'
import dotsIcon from '../../../../../../assets/dots.svg';
import plusIcon from '../../../../../../assets/plus.svg';
import { useDispatch } from '../../../../../../hooks';
import { deleteColumn } from '../../../../../../store/reducers/kanbanSlice';

interface Props {
  columnId:string
}


export const Options: React.FC<Props> = ({ columnId }) => {
  const dispatch = useDispatch();
  
  const deleteColumnHandler = () => {
    dispatch(deleteColumn(columnId));
  };

  return (
    <div className={styles.options}>
      <button aria-label='добавить'>
        <img src={plusIcon} alt='' />
      </button>
      <button aria-label='удалить' onClick={deleteColumnHandler}>
        <img src={dotsIcon} alt='' />
      </button>
    </div>
  );
};
