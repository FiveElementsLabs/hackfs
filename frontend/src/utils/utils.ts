export const getDeadline = (endDate: number) => {
  const finalDate = new Date(endDate);
  const today = new Date();
  const days = (finalDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  const hours = (Math.abs(finalDate.getTime() - today.getTime()) / (1000 * 60 * 60)) % 24;
  const minutes = (Math.abs(finalDate.getTime() - today.getTime()) / (1000 * 60)) % 60;
  const seconds = (Math.abs(finalDate.getTime() - today.getTime()) / 1000) % 60;

  return `${days}d:${hours}h:${minutes}m:${seconds}s`;
};
