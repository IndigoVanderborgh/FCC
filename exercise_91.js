// Accessing Nested Objects

// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

// const ourStorage = {
//     "desk": {
//         "drawer": "stapler"
//     },
//     "cabinet": {
//     "top drawer": { 
//         "folder1": "a file",
//         "folder2": "secrets"
//     },
//         "bottom drawer": "soda"
//     }
// };

// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;

// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, 
// otherwise use bracket notation.
const myStorage = {
    "car": {
        "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
        },
    "outside": {
        "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
//   const gloveBoxContents = undefined;



// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// Since we are accessing the object, and the goal is to assign the contents of the glove box to the new variable on line 41, all we have to do is change the undefined
// to access the glove box in myStorage. So think of this as a box within a box within a box. Take the original line:
//   const gloveBoxContents = undefined;
// and to access we use dot notation.
// myStorage.car.inside["glove box"];