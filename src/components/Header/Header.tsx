import React from 'react';
import { useSelector } from '../../hooks';
import { getCurrentProject } from '../../store/selectors/project';
import { ProjectStatus } from '../shared';
import { Buttons } from './Buttons/Buttons';
import styles from './Header.module.scss';
import { Tabs } from './Tabs/Tabs';

export const Header: React.FC = () => {
  const { name, status } = useSelector(getCurrentProject);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.project}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.status}>
            <ProjectStatus status={status} />
            {status === 'inProgress' && <span>В работе</span>}
            {status === 'completed' && <span>Завершен </span>}
          </div>
        </div>
        <Tabs />
      </div>
      <div className={styles.inner}>
        <Buttons />
      </div>
    </header>
  );
};
