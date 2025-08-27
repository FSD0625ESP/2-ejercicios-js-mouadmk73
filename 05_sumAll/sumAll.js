const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const count = end - start + 1;
  return (count * (start + end)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
