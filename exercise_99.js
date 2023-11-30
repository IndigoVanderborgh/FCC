// Nesting For Loops

// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                product *= arr[i][j];
            }
        }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//       
//     // Only change code above this line
//     return product;
//   }
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// This one is a bit more complex as we are dealing with a multi dimensional array, or an array with sub arrays. Let's break down the solution in an easy way to understand.
// The exercise is asking us to change the function so it returns the product of all numbers in the sub array of arr, and we are given product = 1 in the function and a return product, 
// alongside an array on line 31, which is in the function, and correlates as arr in line 19, meaning: 
// arr = [
//     [1, 2], 
//     [3, 4], 
//     [5, 6, 7]
//     ];

// So like our last exercise, lets set up a for loop on line 22, and explain it out. 
// for (let i = 0; i < arr.length; i++) {
// Basically an initialization statement of i = 0, a conditional statement that bases it on arr.length, which is 3 as the first level array has 3 elements. Final statement is a increment i by 1.
// If the condition is true, we move to the next for loop.

// Within that for loop, we have the for loop that access the sub arrays within the array.
// for (let j = 0; j < arr[i].length; j++) {
// First things first. Since i has been used for the previous array, we cannot use that anymore as it ties to the previous array. So instead we are going to use j to access our subarray.
// On top of that, we are going to use arr[i].length, which grabs the length of the sub/inner array

// Within this for loop, we are going to do our objective: to multiply all numbers within the array together. Lets look at line 24. In that, we have the following:
// product *= arr[i][j]; which is shorthand form of:
// product = product * arr[i][j];
// Without product our output is goign to output [1,2,3,4,5,6,7]. By adding our actual multiplicitive line, we multiply each iteration per length. 

// So if we run this for one iteration as an example you can understand the process. The first time will yeild i=0 stated on line 22, which is for the outer loop. a[i] therefore equals a[0] which is:
// [1,2]
// and since on line 23, our j = 0, we take the first element of a[i], or thei nner sub array, which is 1. The code then loops through the first inner set, then the secodn and then the third, executing 
// the 24th line constantly until it returns a false in its condition statement.