import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '.';
import { setSpentTime } from '../store/reducers/kanbanSlice';
import { getSpentTime } from '../store/selectors/kanban';

export const useTimer = (taskId: string) => {
  const dispatch = useDispatch();

  const spent = useSelector(getSpentTime(taskId));

  const [startDate, setStartDate] = useState(Date.now());
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    setStartDate(Date.now());
  };

  const stop = () => {
    const seconds = Math.floor((Date.now() - startDate) / 1000);

    dispatch(setSpentTime({ taskId, seconds: seconds + spent }));
    setStarted(false);
  };

  const toggleTimer = () => {
    if (started) {
      stop();
    } else {
      start();
    }
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return { started, start, stop, toggleTimer };
};
