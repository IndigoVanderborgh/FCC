// Replace Loops using Recursion

// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

//   function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }

// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

//   function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }

// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
    // Only change code below this line

    // Only change code above this line
  }

// function sum(arr, n) {
//     // Only change code below this line

//     // Only change code above this line
//   }
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Recursion is a new topic, so I will work on this a bit more. I will aslo be using some external sources to understand this topic better.
//  In fact, I think I'll cover recursion over the weekend. I'll be looking at first this source below.
// https://medium.com/sessionstack-blog/how-javascript-works-recursion-in-javascript-what-it-is-and-how-it-is-used-eef3d734f20d

// Recursion Notes: Javascript is a feature used in a function that calls itself until its desired results are achieved. Below is an example of syntax/pseudocode of a recursion function:
// function recursion() {
//    if () { //desired command
//      return;
// }
// recursive step codes
// }
// recursion(); // calls entire function to execute

// Another example of a recursive function for calculating factorial numbers:
// function factorial(num){
//   if(num === 0){
//       return 1;
//   }
//   return num * factorial(num-1) 
// }

// console.log(factorial(20));

// Let's take a look in to the makeup of recursion. There are three basic parts:
// 1) The Function Declaration
// 2) The Base Case
// 3) The Recursive Call command

// 1) The Function Declaration is the the part that declared the intended recursive function. 
// function recursion() {

//}

// 2) The Base Case is the foundation of the recursive function. It's where the conditions are set, and initial problem are stated and to be solved. It can be a if...else statement.
    // here is the base case
    // if (true) {
    //   return;
// Once the stated base condition is met, the command wth the return statement is executed.

// 3) The Recursion Call command is responsible for the trigger of the recursive calls. It also tackles the problem you are trying to solve.
    // here is the recursion function codes
//     return ... ;
// }

// Puttng it all together:
// function recursion() {
//   // here is the base case
//    if (true) {
//        return;
//    }
//    // here is the recursion function codes
//    return ... ;
// }

// recursion()

// Lets move on to some examples starting with a countdown from 10 to 1. The output should be 10, 9, 8 ... 1.
function descendNum(startNum) {
  console.log(startNum); // prints starting number, ie 10

  let nextNum = startNum - 1; // declared new variable nextNum equal to (startNum)10 - 1

  if (nextNum > 0) { // condition to check if new number is greater than 0 then we call the function but with the new number, and run it again and again until condition is met.
      
      descendNum(nextNum); // runs function again using new number from line 100.
  }

}

descendNum(10); // our initial number 10, runs the program with the desired number. 

// I actually looked around and found some more sites to learn recursion from:
// https://www.programiz.com/javascript/recursion
// https://developer.mozilla.org/en-US/docs/Glossary/Recursion
// https://www.freecodecamp.org/news/recursion-in-javascript/

// The third source is pretty good. I'll be using their explanation and examples.
// They use the same three parts but call it differently in terms:

// The function definition
// The base condition
// The recursive call

// The function definition is the start of the recursion:

// function recursiveFunc() {
  // some code here...
// } 

// What seperates this from regular functions are the next two definitions.
// Base condition:

// function recursiveFunc() {
//   if(base condition) {
//     // stops recursion if condition is met
//   }
//   // else recursion continues
//   recurse();
// }

// You need a base condition because without it you will run into infinite recursion, where the function continues to call itself with no end. 
// example:

// function doSomething(n) {
//   if(n === 0) {
//     console.log("TASK COMPLETED!")
//     return
//   }
//   console.log("I'm doing something.")
//   doSomething(n - 1)
// }
// doSomething(3)

// The result? If you pass 3  to the function, it produces the "I'm doing something." 3 times, until condition is met, in which it will then produce "TASK COMPLETED!" once 3 calls have been made

// The base condition for the doSomething function is n === 0. Anytime the function is called, it first checks if the base case is met.
// If yes, it prints "TASK COMPLETED!". If not, it continues with the rest of the code in the function. In this case, it will print "I'm doing somethiing." and then
// call the function again. 

// The recursive call is what handles the function calling itself again. In the doSomething function, the recursive call is the line below

// doSomething(n-1)

// Note what happens when the function calls itself. A new parameter n-1 is passed to the function. On every iteration of a recursive call, the parameter will differ from that of the previous call.
// The function will keep calling itself until the new parameter satisfies the base condition.

// Recursion and loops work in similar ways. Every recursive function you write has an alternative solution with a loop

// For example you can create a function to find the factorial of a given number using both recursion and loops.

// function findFactorial(num) {
//   let factorial = 1
//   for (let i = num; i > 0; i--) {
//     factorial *= i
//   }
//   return factorial
// }

// findFactorial(5) // 120

// To find the factorial using a loop, you first initiialize a variable factorial with a value of 1.
// Then you initiate the loop with the given number num. The loop will continue running until i > 0.
// For each iteration, you multiply the current value of factorial by i. And you decrease the value of i by 1 until i is not greater than zero. 
// Finally you return the value of the factorial when the loop finishes running. 

// How to find the factoriqal with recursion.
// Example: 
// function findFactorial(num) {
//   if (num === 0) return 1
//   let factorial = num * findFactorial(num - 1)
//   return factorial;
// }

// findFactorial(5) // 120

// First you need a base condition num === 0
// You also need the recursive call findFactorial(num-1) to ensure the number keeps reducng at each call when you pass a new parameter of n-1
// Then you multiply the result with the previous number num * findFactorial(num-1) until the base condition is met. 