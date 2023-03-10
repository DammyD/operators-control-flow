/**
 * 3. Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
	The subjects for each class group are as follows:
Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
Social Science Subjects - Accounting, Commerce, Marketing, Geography
Arts Subjects - Government, Economics, Literature, History
General Subjects - English, Mathematics

Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 
*/

let classGroup = "Arts";

if (classGroup === "Science") {
  console.log("Bolatito will be taking Physics, Chemistry, Biology, Technical Drawing, English, and Mathematics.")
} else if (classGroup === "Social Science") {
  console.log("Bolatito will be taking Accounting, Commerce, Marketing, Geography, English, and Mathematics.");
} else if (classGroup === "Arts") {
  console.log("Bolatito will be taking Government, Economics, Literature, History, English, and Mathematics.");
} else {
  console.log("Invalid class group. Bolatito will be taking the General Subjects: English and Mathematics.");
}

// In a situation where the classGroup is an empty string or None, it output the else statement



// 4. What is the result when the following program is executed?
for (let i = 1; i < 20; i += 7) {

    console.log(i);
}

/**
 * 5. Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 70, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”
 */

let num = 5;
let pwr = NearestPowerOf2(num);

function NearestPowerOf2(num) {
    // check if the input is positive

    if (num <= 0) {
      return 0;
    }
  
    // find the nearest power of 2 to the input number using a for loop
    let nearestPowerOf2 = 1;

    while (nearestPowerOf2 * 2 <= num) {
      nearestPowerOf2 *= 2;
    }

    return nearestPowerOf2;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");


