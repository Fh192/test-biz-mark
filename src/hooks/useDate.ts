export const useDate = (dateISO: string) => {
  const date = new Date(dateISO);
  const dateInPast = date < new Date();
  const dateAsDayMonth = date.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
  });
  const dateFull = date.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return { dateInPast, dateAsDayMonth, dateFull };
};
