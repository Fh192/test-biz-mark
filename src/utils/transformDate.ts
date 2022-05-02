export const transformDate = (dateValue: string | Date | number) => {
  const date = new Date(dateValue);
  const dateInPast = date < new Date();

  const dayMonthDate = date.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
  });

  const fullDate = date.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return { dayMonthDate, fullDate, dateInPast };
};
