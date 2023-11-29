// Count Backwards With a For Loop

// A for loop can also count backwards, so long as we can define the right conditions.

// In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }

// ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.



// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Push the odd numbers from 9 through 1 to myArray using a for loop.
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
// Setup
// const myArray = [];

// Only change code below this line

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Similar to the previous exercise, however the goal here is to decrement values starting from 9 and ending at 1, and to push it to the array.
// Line 25 is a reverse version of the previous exercise. We started with an initialization statement of i = 9, and our condition statement is set that i must be greater than 0. While that
// condition runs true, this loop will continuously execute until it returns false. At the end of the loop, we have a final expression, which decrements by 2 after the condition is met. 