// Part 1: Comments and Variables
// Student Name: [Your Name Here]
// Date: [Current Date]

/* 
   This file contains exercises for learning JavaScript basics
   including comments, variables, and scope.
   Complete all TODO sections below.
*/

// ============================================
// Exercise 1: Comments
// ============================================

// TODO: Add a single-line comment explaining what this code does
const myName = "Student"; // TODO: Replace with your actual name

/* 
   TODO: Add a multi-line comment here explaining
   the purpose of this assignment and what you're learning
*/


// ============================================
// Exercise 2: Variable Declaration
// ============================================

// TODO: Declare a variable 'userAge' using let and assign your age
// let userAge = 

// TODO: Declare a constant 'PI' and assign the value 3.14159
// const PI = 

// TODO: Declare a variable using var (then explain why we avoid it)
// var oldVariable = 

// Explanation: var has function scope instead of block scope, which can lead to bugs


// ============================================
// Exercise 3: Variable Scope
// ============================================

// Global scope variable
// TODO: Create a global variable called 'globalVar'
// let globalVar = 

// Function to demonstrate scope
function demonstrateScope() {
    // TODO: Create a function-scoped variable called 'functionVar'
    // let functionVar = 
    
    // TODO: Create an if block with a block-scoped variable
    if (true) {
        // let blockVar = 
        // console.log(blockVar); // This should work
    }
    
    // TODO: Try to access blockVar here (it should cause an error if uncommented)
    // console.log(blockVar); // This would cause an error
    
    // TODO: Log the functionVar
    // console.log(functionVar);
}

// TODO: Call the demonstrateScope function
// demonstrateScope();


// ============================================
// Exercise 4: Variable Naming Conventions
// ============================================

// TODO: Create meaningful variable names for the following:

// A user's email address (use camelCase)
// let userEmail = 

// The total price of items in a shopping cart
// let totalPrice = 

// Whether a user is logged in or not (boolean)
// let isLoggedIn = 

// Maximum number of login attempts (constant)
// const MAX_ATTEMPTS = 

// A list of product names (array)
// let productNames = 


// ============================================
// Exercise 5: Variable Reassignment
// ============================================

// TODO: Demonstrate which variables can be reassigned

// Try reassigning a let variable
// let changeableVar = "initial";
// changeableVar = "changed"; // This works

// Try reassigning a const variable (this would cause an error)
// const unchangeableVar = "initial";
// unchangeableVar = "changed"; // This would cause an error

// Show that const objects/arrays can have their contents modified
// const myArray = [1, 2, 3];
// myArray.push(4); // This works - we're not reassigning, just modifying

// const myObject = { name: "John" };
// myObject.age = 25; // This works too


// ============================================
// BONUS: Variable Types
// ============================================

// TODO: Create variables of different types and check them with typeof

// let myString = 
// let myNumber = 
// let myBoolean = 
// let myUndefined;
// let myNull = 
// let myArray = 
// let myObject = 

// TODO: Use typeof to check each variable's type
// console.log(typeof myString);  // Should output: "string"
// console.log(typeof myNumber);  // Should output: "number"
// console.log(typeof myBoolean); // Should output: "boolean"
// console.log(typeof myUndefined); // Should output: "undefined"
// console.log(typeof myNull);    // Should output: "object" (this is a JavaScript quirk!)
// console.log(typeof myArray);   // Should output: "object"
// console.log(typeof myObject);  // Should output: "object"


// ============================================
// Test your code!
// ============================================
// Uncomment the line below to see a success message when everything works
// console.log("✅ All exercises completed successfully!");

// Export for testing (don't modify this)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        demonstrateScope,
        // Add other functions/variables you want to export for testing
    };
}
