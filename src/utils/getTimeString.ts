interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export const getTimeString = (time: Time): string => {
  if (time.hours === 0) {
    if (time.minutes === 0) {
      return `${time.seconds} с.`;
    } else {
      return `${time.minutes} м.`;
    }
  } else {
    return `${time.hours} ч.`;
  }
};
