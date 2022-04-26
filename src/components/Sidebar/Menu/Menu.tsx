import React from 'react';
import checkMarkIcon from '../../../assets/checkMark1.svg';
import homeIcon from '../../../assets/home.svg';
import statisticIcon from '../../../assets/statistic.svg';
import styles from './Menu.module.scss';

interface MenuItem {
  icon: string;
  title: string;
}

const items: MenuItem[] = [
  { icon: homeIcon, title: 'Дашборд' },
  { icon: checkMarkIcon, title: 'Мои Задачи' },
  { icon: statisticIcon, title: 'Проекты' },
];

export const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {items.map(({ icon, title }, index) => (
          <li className={styles.item} key={index}>
            <img src={icon} alt='' className={styles.icon} />
            <span className={styles.title}>{title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
