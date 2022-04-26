import React from 'react';
import arrowVerticalIcon from '../../../../../assets/arrowVertical.svg';
import styles from './Team.module.scss';

interface Props {
  name: string;
}

export const Team: React.FC<Props> = ({ name }) => {
  return (
    <li className={styles.team}>
      <img src={arrowVerticalIcon} alt='' />
      <span className={styles.name}>{name}</span>
    </li>
  );
};
