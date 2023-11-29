// Iterate Through an Array with a For Loop

// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.



// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}


// Setup
//const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// We are expanding on our previous exercise, instead of have a numerical value for our conditional statement, we instead use length of a pre-existing array that has elements populated in it already.
// we are using the array length, or how many elements are in that array. In the exercise, we have a populated array, myArr which has 5 elements.
// We are told to first declare and initialize a variable total to 0. See line 22 for the variable total = 0 declaration.
// Now that we have the first part done of declaring the variable, lets get to the loop now. We'll run it once for this session.
// First we initialize with 0 as we are adding on it by each element we will also have a final expression increment by 1. Also that way there won't be any numerical interference in adding elements
// we set i to be less than myArr.length so not to add more than the array elements.
// line 24 is where we add myArr[i] to total and it makes it the new total. Since we are doing this the first time, the equation looks like this:
// 0 (total) = 0 (total) + 2 (first element in myArr[i] as it starts at 0 per initial statement on line 23) 
// which makes the total now 2. Thats it for the first loop iteration. Now the second one, as i = 1 now per the final expression. For the second iteration:
// 2 (total) = 2 (total) + 3 (second element in the myArr[i])
// now total is 5. And so on until the conditional statement is returned false and the loop stops.