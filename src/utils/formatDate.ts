export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const formatEpochDate = (epochDate: number) => {
  const date = new Date(epochDate*1000)
  return date.toISOString();
}


export const getStartOfWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek);
  return startOfWeek;
};

export const getEndOfWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (6 - dayOfWeek));
  return endOfWeek;
};
