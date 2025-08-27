const fibonacci = function (n) {
  const index = Number(n);
  if (!Number.isFinite(index) || index <= 0) return "OOPS";
  if (index === 1 || index === 2) return 1;
  let prev = 1;
  let curr = 1;
  for (let i = 3; i <= index; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
