// Iterate Odd Numbers With a For Loop

// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// const ourArray = [];

// for (let i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }

// ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.



// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Push the odd numbers from 1 through 9 to myArray using a for loop.
// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray)
// Setup
// const myArray = [];

// Only change code below this line

// for (let i = 1; i < 11; i += 2) {
//   myArray.push(i);
// }

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// Here we change it up from the previous exercise by introducing a different final expression. Instead of incrementing by one, we are increment by two.
// But by changing the starting initial value from 0 to 1, we are starting on an odd number, and will jump to 3 for the next loop, and so on until the conditional expression is met, which is 10.
// Since we started at 1, the loop will run 1-9, as the condition is i is less than 10. It will stop at 9 because 11 is higher than 10. 
// Within the loop, it is simply pushing each i iteration once to the array myArray. This will result in the end of myArray = [1, 3, 5, 7, 9]