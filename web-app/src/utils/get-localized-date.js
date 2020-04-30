const checkIfDateIsValid = (date) => {
  return !isNaN(date.getTime());
};

export const getLocalizedDate = (year, month, day) => {
  const date = new Date(
    `${year}-${month.toString(10).padStart(2, '0')}-${(day + 1)
      .toString(10)
      .padStart(2, '0')}`,
  );

  if (!checkIfDateIsValid(date)) return 'None';

  return date.toLocaleDateString();
};
