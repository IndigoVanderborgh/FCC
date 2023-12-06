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