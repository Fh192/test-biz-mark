import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useDispatch } from '../../../../../../hooks';
import { setTaskDescription } from '../../../../../../store/reducers/kanbanSlice';
import { ITask } from '../../../../../../types/task';
import styles from './Description.module.scss';

type Props = Pick<ITask, 'id' | 'description'>;

export const Description: React.FC<Props> = ({ id, description }) => {
  const dispatch = useDispatch();

  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const [newDescription, setNewDescription] = useState(description);

  const saveDescription = () => {
    dispatch(setTaskDescription({ taskId: id, description: newDescription }));
  };

  const descriptionChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value);
  };

  const textareaKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') saveDescription();
  };
  return (
    <textarea
      className={styles.description}
      placeholder='Добавьте описание к этой задаче...'
      ref={descriptionInputRef}
      value={newDescription}
      onChange={descriptionChangeHandler}
      onKeyDown={textareaKeyDownHandler}
      onBlur={saveDescription}
    />
  );
};
