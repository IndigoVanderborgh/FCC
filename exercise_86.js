// Add New Properties to a JavaScript Object

// You can add new properties to existing JavaScript objects the same way you would modify them.

// Here's how we would add a bark property to ourDog:

// ourDog.bark = "bow-wow";

// or

// ourDog["bark"] = "bow-wow";

// Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

// Example:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.bark = "bow-wow";

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog['bark'] = "woof!"
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Adding a property to an object using bracket notation
// From line 28, the object myDog is given with 4 properties
// To add a new property using pseudocode:
// myDog['bark'] = "woof!"
// myDog           ['bark']      = "woof!"
// ^object "myDog" ^new property = ^new property value