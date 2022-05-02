import React from 'react';
import { useSelector } from '../../../../../hooks';
import { getColumn } from '../../../../../store/selectors/kanban';
import styles from './ColumnHeader.module.scss';
import { Options } from './Options/Options';

interface Props {
  columnId: string;
}

export const ColumnHeader: React.FC<Props> = ({ columnId }) => {
  const column = useSelector(getColumn(columnId));

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{column.title}</h2>
      <Options columnId={columnId} />
    </header>
  );
};
