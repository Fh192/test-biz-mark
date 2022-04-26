import React from 'react';
import { IComment } from '../../../../types/task';
import { AddComment } from './AddComment/AddComment';
import { Comment } from './Comment/Comment';
import styles from './Comments.module.scss';

interface Props {
  comments: IComment[];
  taskId: string;
}

export const Comments: React.FC<Props> = ({ comments, taskId }) => {
  return (
    <div className={styles.comments}>
      <ul className={styles.list}>
        {comments.map(comment => (
          <Comment {...comment} key={comment.id} />
        ))}
      </ul>
      <AddComment taskId={taskId} />
    </div>
  );
};
