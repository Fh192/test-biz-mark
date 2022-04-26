import React from 'react';
import checkMark from '../../../assets/checkMark.svg';
import styles from './Checkbox.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<Props> = ({ ...props }) => {
  return (
    <label className={styles.checkbox}>
      <input className={styles.input} type='checkbox' {...props} />
      <img className={styles.checkMark} src={checkMark} alt='' />
    </label>
  );
};
