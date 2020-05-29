function increment(input) {
  return input + 1;
}
function decrement(input) {
  return input - 1;
}
function double(input) {
  return input * 2;
}
function halve(input) {
  return input / 2;
}

const pipeline = [increment, decrement, double,double,double, halve];

const initialValue = 10;

const reducer = (accumulator, fn) => fn(accumulator);

console.log(pipeline.reduce(reducer, initialValue));
