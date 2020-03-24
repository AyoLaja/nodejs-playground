const counter = (arr) => {
  return `There are ${arr.length} elements in the array`
}

const adder = (a, b) => {
  return `Result of adder is ${a + b}`
}

const pi = 3.14

console.log(counter(['sho', 'gun']))

module.exports = {
  counter,
  adder,
  pi
}