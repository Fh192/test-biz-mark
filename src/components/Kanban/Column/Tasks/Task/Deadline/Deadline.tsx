import classNames from 'classnames/bind';
import React from 'react';
import { useDate } from '../../../../../../hooks';
import styles from './Deadline.module.scss';

interface Props {
  deadline: string;
}

export const Deadline: React.FC<Props> = ({ deadline }) => {
  const cx = classNames.bind(styles);
  const { dayMonthDate, dateInPast } = useDate(deadline);

  return (
    <span className={cx(['deadline'], { deadlineExpired: dateInPast })}>
      до {dayMonthDate}
    </span>
  );
};
