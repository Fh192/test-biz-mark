import React from 'react';
import burgerIcon from '../../../assets/burger.svg';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Captain</h1>
      </div>
      <button className={styles.burger}>
        <img src={burgerIcon} alt='' />
      </button>
    </header>
  );
};
