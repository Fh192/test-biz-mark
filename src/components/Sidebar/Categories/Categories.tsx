import React from 'react';
import styles from './Categories.module.scss';
import { Projects } from './Projects/Projects';
import { Teams } from './Teams/Teams';

export const Categories: React.FC = () => {
  return (
    <div className={styles.categories}>
      <Projects />
      <Teams />
    </div>
  );
};
