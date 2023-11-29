// Iterate with JavaScript For Loops

// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

// const ourArray = [];

// for (let i = 0; i < 5; i++) {
//   ourArray.push(i);
// }

// ourArray will now have the value [0, 1, 2, 3, 4].


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Use a for loop to push the values 1 through 5 onto myArray.
// Setup
// const myArray = [];

// Only change code below this line
// Setup
const myArray = [];

// Only change code below this line
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Unlike the other exercise, we are usign a for loop. For loops are a different kind of loop to while in format but function as similar as they are designed in the same vein.
// its up to the user to choose the application of whether for or while loop would make your life much easier.
// Lets look at the exercise above and explain the process.
// for (var i = 1; i < 6; i++) {
//     myArray.push(i);
// }

// The basic format of a for loop is below. 
// for(var i = 1; i < 6; i++)
// for(var/let a; b; c)

// a = initialization statement ie i = 1 or i = 0 which is executed only one time before the loops starts
// b = condition statement, which is evaulated in the beginning of the every loop iteration and will continue as long as it evaluates to true. When the condition is false, at the start of the iteration, the loop
// will stop executing. This means if the condition starts as false, the loop will never execute.
// c = Final expression, which is executed at the end of the each of loop iteration, prior to the next condition check and is usually used to increment/decrement your loop counter. 