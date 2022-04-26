import React from 'react';
import { Tab } from './Tab/Tab';
import styles from './Tabs.module.scss';

interface ITab {
  title: string;
  active: boolean;
}

const tabs: ITab[] = [
  { title: 'Описание', active: false },
  { title: 'Список', active: false },
  { title: 'Канбан', active: true },
  { title: 'Планирование', active: false },
  { title: 'Дашборд', active: false },
  { title: 'Команда', active: false },
];

export const Tabs: React.FC = () => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        {tabs.map(({ title }, index) => (
          <Tab title={title} key={index} />
        ))}
      </ul>
    </nav>
  );
};
