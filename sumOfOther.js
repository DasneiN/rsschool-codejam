module.exports = function sumOfOther(arr) {
  const summ = arr.reduce((ac, v) => ac + v);

  return arr.map(v => summ - v);
};
