import classNames from 'classnames/bind';
import React from 'react';
import styles from './Tab.module.scss';

interface Props {
  title: string;
  active: boolean;
  setActive: () => void;
}

export const Tab: React.FC<Props> = ({ title, active, setActive }) => {
  const cx = classNames.bind(styles);

  return (
    <li className={cx('tab', { active })} onClick={setActive}>
      {title}
    </li>
  );
};
