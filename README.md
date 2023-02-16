## Questions

# Javascript Operators & Control Flow

For this assignment, create a folder and name it `operators-control-flow`. Put the answers to `Questions 1, 2 and 4` in a file named `readme.md`. For the coding questions, `create a file` and name it `index.js`. Use comments to label your answers.

1. List the symbols for each of the below JavaScript operators

 - Arithmetic Operators
 - Assignment Operators
 - Comparison Operators
 - Logical Operators
 - Bitwise Operators

2. For each JavaScript Operator, write 2 examples.

3. Bolatito just got admitted to Greenfield High School as an `Arts student`. To commence her studies, she needs to know the `subjects` she will be taking as an `Arts student`. All students have to take the General subjects.
	The subjects for each class group are as follows:

Science Subjects - `Physics, Chemistry, Biology, Technical Drawing` 

Social Science Subjects - `Accounting, Commerce, Marketing, Geography`

Arts Subjects - `Government, Economics, Literature, History`

General Subjects - `English, Mathematics`

Using `if…else conditional statement`, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an `invalid` class group, your output should be the `General subjects.` 


4. What is the result when the following program is executed?

for (let i = 1; i < 20; i += 7) {

    console.log(i);
}

5. Write a program that takes a positive number `(num)` and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number `(pwr)` is the power of 2 nearest to `(num)`.”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”



## Answers
# List the symbols for each of the below Javascript operators

# Arithmetic Operators
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)
- Exponent (**)
- Increment (++)
- Decrement (--)

# Assignment Operators
- Simple assignment (=)
- Addition assignment (+=)
- Subtraction assignment (-=)
- Multiplication assignment (*=)
- Division assignment (/=)
- Modulus assignment (%=)

# Comparison Operators
- Equal to (==)
- Strict to (===)
- Not equal to (!=)
- Greater than (>)
- Less than (<)
- Greater than or equal to (>=)
- Less than or equal to (<=)
- Strict not equal to (!==)

# Logical Operators
- Logical AND (&&)
- Logical OR (||)
- Logical NOT (!)

# Bitwise Operators
- Bitwise AND (&)
- Bitwise OR (|)
- Bitwise NOT (~)
- Bitwise XOR (^)


2. For each JavaScript Operator, write 2 examples.

# Arithmetic Operators
# Multplication (*)
let a = 4;
let b = 3;

let multiply = a * b;
console.log(multiply); // 12

# Exponent (**)
let a = 5;
let b = 5;

let exponent = a ** b;
console.log(exponent); // 25

# Assignment Operators
# Simple assignment (=)
let a = 2;

# Addition assignment (+=)
let x = 10;
x += 5; // equivalent to x = x + 5
console.log(x); // 15

# Comparison Operators
# Equal to (==)
console.log(2 == 2); // true

# Strict equal to (===)
console.log(5 === '5'); // false