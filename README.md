## Pythagorean Integer Checker

A geometric utility that determines if two side lengths of a right triangle result in a **Pythagorean Triple** - where the hypotenuse is a perfect whole number.

### The Mathematical Foundation

The relationship between the sides of a right triangle is defined by the **Pythagorean Theorem**;
a _ a + b _ b = c \* c;

To find the hypotenuse (c), we transform the equation to:

    c = Math.sqrt(a * a + b * b);

### Implementation

```JavaScript

function isIntegerHypotenuse(a, b) {
    // 1. Calculate the hypotenuse
    const c = Math.sqrt(a ** 2 + b ** 2);

    // 2. Check if the result is an integer
    return Number.isInteger(c);
}

```

### What I Learned

1. Data Type Conversion for Validation

I learned that I can validate numerical properties by converting them to strings. While checking for a `.` with Regex works, it's a reminder that numbers and strings can sometimes solve the same problem in different ways.

2. The `**` Operator

I practiced using `a ** 2` as a modern, readable alternative to `a * a` or `Math.pow(a, 2)`.

3. Precision and Integers

I reinforced the idea that square roots often result in **Irrational Numbers** (infinite decimals). Differentiating between an integer and a float is a key skill in both graphics programming and data science.
