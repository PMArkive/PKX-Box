export const getDisplayIV = iv =>
  iv === null || iv === undefined ? 'X' : iv.toString(10);
