import { transformDate } from '../utils/transformDate';

export const useDate = (dateISO: string) => {
  const date = new Date(dateISO);
  const dateInPast = date < new Date();
  const { dayMonthDate, fullDate } = transformDate(dateISO);

  return { dateInPast, dayMonthDate, fullDate };
};
