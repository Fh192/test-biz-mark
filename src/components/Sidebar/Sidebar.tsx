import React from 'react';
import { Categories } from './Categories/Categories';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Header />
      <div className={styles.inner}>
        <Menu />
        <Categories />
      </div>
    </aside>
  );
};
