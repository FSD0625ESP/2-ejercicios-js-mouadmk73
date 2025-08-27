const removeFromArray = function (...args) {
  const array = args[0];
  const toRemove = args.slice(1);
  return array.filter((item) => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
