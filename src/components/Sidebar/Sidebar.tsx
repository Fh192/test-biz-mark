import React from 'react';
import { Categories } from './Categories/Categories';
import { Menu } from './Menu/Menu';
import styles from './Sidebar.module.scss';
import { SidebarHeader } from './SidebarHeader/SidebarHeader';

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.inner}>
        <Menu />
        <Categories />
      </div>
    </aside>
  );
};
