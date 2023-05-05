const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => sum += value, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, value) => prod *= value, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
	if (n < 2) return 1;

  let fact = 1;
  for (let i=2; i<=n; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
