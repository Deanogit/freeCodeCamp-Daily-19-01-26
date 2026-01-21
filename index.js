// Integer Hypotenuse
// Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

// The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

function isIntegerHypotenuse(a, b) {
  console.log(typeof Math.sqrt(a * a + b * b).toString());
  // store as string
  const str = Math.sqrt(a * a + b * b).toString();
  // turn number into string to find if it contains a "."

  const regex = /\./;

  return !regex.test(str);

  // return a;
}

isIntegerHypotenuse(2, 3);
isIntegerHypotenuse(10, 10);
