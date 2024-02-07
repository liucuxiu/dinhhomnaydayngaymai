export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const formatDateDMY = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};


export const formatEpochDateDMYHHMM = (epochDate: number) => {
  const date = new Date(epochDate*1000)
  const newDate =  date.toISOString();
  const day = String(newDate.slice(8,10)).padStart(2, '0');
  const month = String(newDate.slice(5,7)).padStart(2, '0'); // Months are 0-indexed in JavaScript
  const year = newDate.slice(0,4);
  const hours = newDate.slice(11,13);
  const minutes = newDate.slice(14,16);

  return `${day}/${month}/${year} ${hours}:${minutes}`;

}

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
