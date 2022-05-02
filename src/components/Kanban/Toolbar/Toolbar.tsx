import React from 'react';
import filterIcon from '../../../assets/filter.svg';
import sortIcon from '../../../assets/sort.svg';
import styles from './Toolbar.module.scss';

export const Toolbar: React.FC = () => {
  return (
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
  );
};
