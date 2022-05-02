import React from 'react';
import { Columns } from './Columns/Columns';
import styles from './Kanban.module.scss';
import { LastTaskCompletionDate } from './LastTaskCompletionDate/LastTaskCompletionDate';
import { Toolbar } from './Toolbar/Toolbar';

export const Kanban: React.FC = () => {
  return (
    <section className={styles.kanban}>
      <header className={styles.header}>
        <LastTaskCompletionDate />
        <Toolbar />
      </header>
      <Columns />
    </section>
  );
};
