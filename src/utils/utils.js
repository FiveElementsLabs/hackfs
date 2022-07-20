export const getDeadline = (endDate) => {
  const today = new Date();
  const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt((Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60);
  const seconds = parseInt((Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60);

  return `${days}d:${hours}h:${minutes}m:${seconds}s`;
};
