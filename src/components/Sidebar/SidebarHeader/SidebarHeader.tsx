import React from 'react';
import burgerIcon from '../../../assets/burger.svg';
import styles from './SidebarHeader.module.scss';

export const SidebarHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Captain</h1>
      </div>
      <button className={styles.burger} aria-label='menu'>
        <img src={burgerIcon} alt='menu' />
      </button>
    </header>
  );
};
