// Iterate with JavaScript While Loops

// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }

// In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

// Let's try getting a while loop to work by pushing values to an array.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// Setup
// const myArray = [];

// Only change code below this line

// Setup
const myArray = [];

// Only change code below this line
var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// var i = 0;
// while(i < 5) {
//     myArray.push(i);
//     i++;
// }
// Explaining the solution:
// We are using a while loop, but we need to start with an initial value (stated on line 31)
// Then on line 33, we are pushing i to the first element in the array myArray, which was set up as an empty array on line 28, making myArray now have an element, [0]
// once 0 is pushed to the array, i++ increments i by one. so now i is 1, and we've reached the end of the while loop, but the condition on line 32 states that while i is less than 5, then continue with the 
// following. So the while loop continues incrementing until it reaches 5, resulting in myArray to be [0, 1, 2, 3, 4]
// consoling out the array confirms the answer.