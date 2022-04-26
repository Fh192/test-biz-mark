import React, { useState } from 'react';
import arrowIcon from '../../../../assets/arrow.svg';
import { useSelector } from '../../../../hooks';
import { Project } from './Project/Project';
import styles from './Projects.module.scss';

export const Projects: React.FC = () => {
  const { projects } = useSelector(s => s.projects);
  const [sliceSize, setSliceSize] = useState(4);
  const showOpenFullListBtn = sliceSize !== projects.length;

  const openFullListHandler = () => {
    setSliceSize(projects.length);
  };

  return (
    <div className={styles.favorites}>
      <h2 className={styles.label}>Избранное</h2>
      <ul className={styles.list}>
        {projects.slice(0, sliceSize).map(project => (
          <Project {...project} key={project.id} />
        ))}
      </ul>
      {showOpenFullListBtn && (
        <button className={styles.openFullList} onClick={openFullListHandler}>
          <span>Раскрыть весь список</span>
          <img src={arrowIcon} alt='' />
        </button>
      )}
    </div>
  );
};
