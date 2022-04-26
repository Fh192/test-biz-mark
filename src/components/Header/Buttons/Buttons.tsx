import classNames from 'classnames/bind';
import React from 'react';
import avatar from '../../../assets/avatar1.svg';
import bellIcon from '../../../assets/bell.svg';
import messageIcon from '../../../assets/message.svg';
import moonIcon from '../../../assets/moon.svg';
import styles from './Buttons.module.scss';

interface IButton {
  icon: string;
  name: string;
}

const buttons: IButton[] = [
  { icon: moonIcon, name: 'theme' },
  { icon: messageIcon, name: 'messages' },
  { icon: bellIcon, name: 'notifications' },
  { icon: avatar, name: 'avatar' },
];

export const Buttons: React.FC = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={styles.buttons}>
      {buttons.map(({ icon, name }, index) => (
        <li className={cx(['button', name])} key={index}>
          <button>
            <img src={icon} alt={name} />
          </button>
        </li>
      ))}
    </ul>
  );
};
