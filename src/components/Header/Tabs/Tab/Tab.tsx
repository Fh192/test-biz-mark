import classNames from 'classnames';
import React from 'react';
import styles from './Tab.module.scss';

interface Props {
  title: string;
}

export const Tab: React.FC<Props> = ({ title }) => {
  const cx = classNames.bind(styles);

  return <li className={styles.tab}>{title}</li>;
};
