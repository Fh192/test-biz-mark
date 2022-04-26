import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import sendIcon from '../../../../../assets/send.svg';
import { useDispatch, useSelector } from '../../../../../hooks';
import { addTaskComment } from '../../../../../store/reducers/kanbanSlice';
import styles from './AddComment.module.scss';

interface Props {
  taskId: string;
}

export const AddComment: React.FC<Props> = ({ taskId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { avatar, name } = useSelector(s => s.user);

  const submit = () => {
    dispatch(addTaskComment({ text, author: { avatar, name }, taskId }));
    setText('');
  };

  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text) submit();
  };

  return (
    <div className={styles.addComment}>
      <img src={avatar} alt='' className={styles.avatar} />
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='Задайте вопрос или напишите комментарий...'
          className={styles.input}
          value={text}
          onChange={textChangeHandler}
          onKeyDown={keyDownHandler}
        />
        <button className={styles.sendButton} onClick={submit}>
          <img src={sendIcon} alt='send' />
        </button>
      </div>
    </div>
  );
};
