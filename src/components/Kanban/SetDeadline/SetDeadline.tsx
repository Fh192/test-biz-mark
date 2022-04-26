import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../../assets/calendar.svg';
import { useDispatch } from '../../../hooks';
import { setDeadline } from '../../../store/reducers/kanbanSlice';
import styles from './SetDeadline.module.scss';

interface Props {
  id: string;
  deadline: string;
  deadlineFor: 'tasks' | 'subtasks';
}

export const SetDeadline: React.FC<Props> = ({ id, deadline, deadlineFor }) => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const dateChangeHandler = (date: Date) => {
    dispatch(setDeadline({ id, deadline: date.toISOString(), deadlineFor }));
    closeDatePicker();
  };

  return (
    <div className={styles.setDeadline} ref={ref}>
      <button className={styles.openButton} onClick={openDatePicker}>
        <img src={calendarIcon} alt='' />
      </button>

      {showDatePicker && (
        <div className={styles.datePicker}>
          <DatePicker
            inline={true}
            selected={new Date(deadline)}
            onChange={dateChangeHandler}
            onClickOutside={closeDatePicker}
          />
        </div>
      )}
    </div>
  );
};
