// Accessing Object Properties with Variables

// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

// Here is an example of using a variable to access a property:

// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);

// The string Doberman would be displayed in the console.

// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line


// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Line 32 states a constant "playerNumber" which is 16.
// line 33 states a new constant "player" that is equal to testObj[playerNumber]; which [playerNumber] is 16 stated in line 32
// It is also accessing the property 16, which is "Montana" so in the end const player would equal "Montana"