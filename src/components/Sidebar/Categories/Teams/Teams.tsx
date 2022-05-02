import React from 'react';
import { Team } from './Team/Team';
import styles from './Teams.module.scss';

interface ITeam {
  name: string;
}

const teams: ITeam[] = [
  { name: 'Программисты' },
  { name: 'Маркетологи' },
  { name: 'Дизайнеры' },
];

export const Teams: React.FC = () => {
  return (
    <div className={styles.teams}>
      <h2 className={styles.label}>Команды</h2>
      <ul className={styles.list}>
        {teams.map(({ name }, index) => (
          <Team name={name} key={index} />
        ))}
      </ul>
    </div>
  );
};
