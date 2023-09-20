const getId = (items) => {
  const existingNumbers = items.map(({ id }) => Number(id));

  const min = 10000000;
  const max = 99999999;

  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (existingNumbers.includes(randomNumber));

  return randomNumber.toString();
};
export default getId;
