import React from 'react';
import playIcon from '../../../../../../assets/play.svg';
import playActiveIcon from '../../../../../../assets/playActive.svg';
import { useTimer } from '../../../../../../hooks';
import styles from './Timer.module.scss';

interface Props {
  taskId: string;
}

export const Timer: React.FC<Props> = ({ taskId }) => {
  const { started, toggleTimer } = useTimer(taskId);

  return (
    <button className={styles.timer} onClick={toggleTimer}>
      <img src={started ? playActiveIcon : playIcon} alt='play' />
    </button>
  );
};
