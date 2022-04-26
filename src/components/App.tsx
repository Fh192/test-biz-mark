import React from 'react';
import styles from './App.module.scss';
import { Header } from './Header/Header';
import { Kanban } from './Kanban/Kanban';
import { Sidebar } from './Sidebar/Sidebar';

export const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <Kanban />
        </main>
      </div>
    </div>
  );
};
