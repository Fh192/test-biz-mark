import React, { useState } from 'react';
import { Tab } from './Tab/Tab';
import styles from './Tabs.module.scss';

interface ITab {
  id: string;
  title: string;
  active: boolean;
}

const initialTabs: ITab[] = [
  { id: 'tab-1', title: 'Описание', active: false },
  { id: 'tab-2', title: 'Список', active: false },
  { id: 'tab-3', title: 'Канбан', active: true },
  { id: 'tab-4', title: 'Планирование', active: false },
  { id: 'tab-5', title: 'Дашборд', active: false },
  { id: 'tab-6', title: 'Команда', active: false },
];

export const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState(initialTabs);

  const setActive = (id: string) => {
    setTabs(tabs => tabs.map(tab => ({ ...tab, active: tab.id === id })));
  };

  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        {tabs.map(({ title, active, id }) => (
          <Tab
            setActive={() => setActive(id)}
            title={title}
            active={active}
            key={id}
          />
        ))}
      </ul>
    </nav>
  );
};
