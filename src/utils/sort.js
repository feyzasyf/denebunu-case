export const sortArray = (arr) => {
  return arr.sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id)));
};
