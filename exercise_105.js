// Generate Random Whole Numbers within a Range

// You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

// You'll call your minimum number min and your maximum number max.

// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// function randomRange(myMin, myMax) {
//     return 0;
//   }

// Example
// function ourRandomRange(ourMin, ourMax) {

//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
//   }
  
//   ourRandomRange(1, 9);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
