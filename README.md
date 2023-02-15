## Assignment

# Javascript Operators & Control Flow

1. List the symbols for each of the below JavaScript operators

 - Arithmetic Operators
 - Assignment Operators
 - Comparison Operators
 - Logical Operators
 - Bitwise Operators

2. For each JavaScript Operator, write 2 examples.

3. Alright here's an exercise for you, I want you to write a function that takes two numbers and returns the maximum of the two. Call that function, give a different argument, and make sure it's working properly.

4. FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.

5. This exercise is a very popular exercise for junior programmers. So, we have this function, showStars, with a parameter called rows. So when we call this function and pass 5. We get 5 rows, in each row we have a star, and the number of stars in that row, depends on the row we are in. So in the first row we have one star, in the second row we have 2 stars, and so on. If you call this function and pass 1, get only a single star, if we pass 2, we get 2 rows, if we pass 10, you get the point.

6. Now for every five kilometers above the speed limit, they're going to get 1 point. So if I drive at 75 km an hour, I get 1 point here. But what if I drive at 72 km an hour? I'm still good. So for every 5 km, above the speed limit, we should give the driver 1 point. Now as part of calculating the point here, you will have to use one of the built in functions in JavaScript that is Math. floor. We can give this function a floating point number, like 1.3, let's say 1.3 points, and this will convert that to the greatest integer, for example if we go to the console here, and type math.floor of 1.3, we get 1. So you will have to use this function as part of your calculations back to our checkSpeed function, what if you passed 80 here? We should get 2 points right? So we get 2 points, beautiful. Now what if we drive at 180 km an hour? Our license is suspended. So if a driver gets more than 12 points, then their license should be suspended.