import React from 'react';
import { IComment } from '../../../../../types/task';
import styles from './Comment.module.scss';

export const Comment: React.FC<IComment> = ({ id, text, author, date }) => {
  const addDate = new Date(date).toLocaleString('ru', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <li className={styles.comment} key={id}>
      <img className={styles.avatar} src={author.avatar} alt='' />
      <div className={styles.inner}>
        <div className={styles.info}>
          <span className={styles.authorName}>{author.name}</span>
          <span className={styles.date}>{addDate}</span>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
};
