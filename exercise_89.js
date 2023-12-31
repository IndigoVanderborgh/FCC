// Testing Objects for Properties

// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

// Example

// function checkForProperty(object, property) {
//   return object.hasOwnProperty(property);
// }

// checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
// checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

// The first checkForProperty function call returns true, while the second returns false.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.
// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     return "Change Me!";
//     // Only change code above this line
// }

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// We have two parameters in the function "checkObj". On line 26, we used:
// obj.hasOwnProperty(checkProp)
// obj          . hasOwnProperty         (checkProp)
// ^parameter 1 . ^method hasOwnProperty ^parameter 2
//  and in line 27, we have obj[checkProp]:
// obj[checkProp]
// obj            [checkProp]
// ^parameter 1   ^parameter 2

// This is a more abstract challenge for using hasOwnProperty, since there isn't an actual object.