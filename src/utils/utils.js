export const getDeadline = (endDate) => {
  const finalDate = new Date(endDate);
  const today = new Date();
  const days = parseInt((finalDate - today) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(finalDate - today) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt((Math.abs(finalDate.getTime() - today.getTime()) / (1000 * 60)) % 60);
  const seconds = parseInt((Math.abs(finalDate.getTime() - today.getTime()) / 1000) % 60);

  return `${days}d:${hours}h:${minutes}m:${seconds}s`;
};
