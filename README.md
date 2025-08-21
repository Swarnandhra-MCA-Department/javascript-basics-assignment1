# JavaScript Basics Assignment

## 📚 Learning Objectives
By completing this assignment, you will learn:
- JavaScript syntax and basic instructions
- Working with variables and data types
- String and array manipulation
- Creating and using functions
- Working with objects and methods
- Implementing decisions (conditionals) and loops

## 📋 Assignment Structure
```
javascript-basics-assignment/
├── README.md (this file)
├── index.html
├── style.css
├── 01-basics/
│   ├── comments-variables.js
│   └── test-basics.html
├── 02-data-types/
│   ├── data-types.js
│   └── test-datatypes.html
├── 03-arrays-strings/
│   ├── arrays-strings.js
│   └── test-arrays.html
├── 04-functions/
│   ├── functions.js
│   └── test-functions.html
├── 05-objects/
│   ├── objects.js
│   └── test-objects.html
├── 06-decisions-loops/
│   ├── control-flow.js
│   └── test-control.html
└── 07-final-project/
    ├── calculator.js
    └── calculator.html
```

## 🚀 Getting Started

1. **Fork this repository** by clicking the "Fork" button
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/javascript-basics-assignment.git
   cd javascript-basics-assignment
   ```
3. **Complete the exercises** in each numbered folder
4. **Test your solutions** by opening the test HTML files in your browser
5. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Complete exercise X"
   git push origin main
   ```

## 📝 Assignment Tasks

### Part 1: Comments & Variables (10 points)
**File:** `01-basics/comments-variables.js`

Complete the following tasks:
- [ ] Add single-line and multi-line comments explaining your code
- [ ] Declare variables using `let`, `const`, and `var`
- [ ] Practice variable naming conventions
- [ ] Demonstrate variable scope

### Part 2: Data Types (10 points)
**File:** `02-data-types/data-types.js`

Complete exercises for:
- [ ] Numbers (integers and decimals)
- [ ] Strings
- [ ] Booleans
- [ ] Undefined and Null
- [ ] Type conversion
- [ ] Type checking with `typeof`

### Part 3: Arrays & Strings (15 points)
**File:** `03-arrays-strings/arrays-strings.js`

Implement:
- [ ] Array creation and manipulation
- [ ] Array methods (push, pop, shift, unshift, splice)
- [ ] String methods (length, substring, indexOf, split, join)
- [ ] Iterate through arrays
- [ ] String concatenation and template literals

### Part 4: Functions (15 points)
**File:** `04-functions/functions.js`

Create:
- [ ] Function declarations
- [ ] Function expressions
- [ ] Arrow functions
- [ ] Functions with parameters and return values
- [ ] Callback functions
- [ ] Function scope

### Part 5: Objects & Methods (15 points)
**File:** `05-objects/objects.js`

Build:
- [ ] Object literals
- [ ] Object properties and methods
- [ ] Object constructors
- [ ] The `this` keyword
- [ ] Object iteration
- [ ] Nested objects

### Part 6: Decisions & Loops (15 points)
**File:** `06-decisions-loops/control-flow.js`

Implement:
- [ ] if/else statements
- [ ] switch statements
- [ ] Ternary operators
- [ ] for loops
- [ ] while and do-while loops
- [ ] for...of and for...in loops
- [ ] break and continue statements

### Part 7: Final Project - Calculator (20 points)
**File:** `07-final-project/calculator.js`

Create a functional calculator that:
- [ ] Performs basic arithmetic operations (+, -, *, /)
- [ ] Handles decimal numbers
- [ ] Includes clear functionality
- [ ] Shows operation history
- [ ] Has error handling for division by zero

## 📁 Starter Files

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics Assignment</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>JavaScript Basics Assignment</h1>
    <nav>
        <ul>
            <li><a href="01-basics/test-basics.html">Part 1: Basics</a></li>
            <li><a href="02-data-types/test-datatypes.html">Part 2: Data Types</a></li>
            <li><a href="03-arrays-strings/test-arrays.html">Part 3: Arrays & Strings</a></li>
            <li><a href="04-functions/test-functions.html">Part 4: Functions</a></li>
            <li><a href="05-objects/test-objects.html">Part 5: Objects</a></li>
            <li><a href="06-decisions-loops/test-control.html">Part 6: Control Flow</a></li>
            <li><a href="07-final-project/calculator.html">Final Project</a></li>
        </ul>
    </nav>
</body>
</html>
```

### 01-basics/comments-variables.js
```javascript
// Part 1: Comments and Variables
// Student Name: [Your Name]
// Date: [Current Date]

/* 
   Multi-line comment
   TODO: Complete all exercises below
*/

// Exercise 1: Variable Declaration
// Declare a variable using let for a user's age


// Declare a constant for PI


// Declare a variable using var (explain why var is not recommended)


// Exercise 2: Variable Scope
// Create a function that demonstrates block scope
function demonstrateScope() {
    // TODO: Show difference between let and var in block scope
    
}

// Exercise 3: Variable Naming
// Create meaningful variable names for:
// - A user's email address
// - The total price of items in a shopping cart
// - Whether a user is logged in or not


// Exercise 4: Variable Reassignment
// Show which variables can be reassigned and which cannot


// DO NOT MODIFY BELOW THIS LINE
module.exports = { demonstrateScope };
```

### 02-data-types/data-types.js
```javascript
// Part 2: Data Types

// Exercise 1: Number Operations
function numberOperations() {
    // TODO: Create variables for different number types
    // Integer:
    // Decimal:
    // Negative number:
    // Perform arithmetic operations
    
}

// Exercise 2: String Operations
function stringOperations() {
    // TODO: Create and manipulate strings
    // Concatenation:
    // Template literals:
    // String length:
    
}

// Exercise 3: Boolean Logic
function booleanOperations() {
    // TODO: Create boolean variables and perform logical operations
    
}

// Exercise 4: Type Conversion
function typeConversion() {
    // TODO: Convert between different data types
    // String to Number:
    // Number to String:
    // Boolean conversions:
    
}

// Exercise 5: Type Checking
function checkTypes() {
    // TODO: Use typeof to check variable types
    
}
```

### 03-arrays-strings/arrays-strings.js
```javascript
// Part 3: Arrays and Strings

// Exercise 1: Array Creation and Access
function arrayBasics() {
    // TODO: Create an array of your favorite foods
    // Access specific elements
    // Get array length
    
}

// Exercise 2: Array Methods
function arrayMethods() {
    // TODO: Use push, pop, shift, unshift, splice
    let numbers = [1, 2, 3, 4, 5];
    
}

// Exercise 3: Array Iteration
function iterateArray(array) {
    // TODO: Use different methods to iterate through the array
    // for loop:
    // forEach:
    // map:
    
}

// Exercise 4: String Manipulation
function stringMethods(inputString) {
    // TODO: Use various string methods
    // toUpperCase:
    // toLowerCase:
    // substring:
    // indexOf:
    // split:
    
}

// Exercise 5: Array and String Combination
function arrayStringCombo() {
    // TODO: Convert array to string and vice versa
    
}
```

### 04-functions/functions.js
```javascript
// Part 4: Functions

// Exercise 1: Function Declaration
function greetUser(name) {
    // TODO: Return a greeting message
    
}

// Exercise 2: Function Expression
const calculateArea = function(length, width) {
    // TODO: Calculate and return area
    
};

// Exercise 3: Arrow Functions
const multiplyByTwo = (number) => {
    // TODO: Return number multiplied by 2
    
};

// Exercise 4: Functions with Default Parameters
function createUser(name, age = 18, country = "USA") {
    // TODO: Create and return a user object
    
}

// Exercise 5: Callback Functions
function processArray(array, callback) {
    // TODO: Apply callback function to each array element
    
}

// Exercise 6: Higher-Order Function
function createMultiplier(factor) {
    // TODO: Return a function that multiplies by factor
    
}
```

### 05-objects/objects.js
```javascript
// Part 5: Objects and Methods

// Exercise 1: Object Literal
const student = {
    // TODO: Add properties: name, age, grades (array)
    // Add method: calculateAverage()
    
};

// Exercise 2: Object Constructor
function Car(make, model, year) {
    // TODO: Initialize properties
    // Add method: getAge() - returns current year minus car year
    
}

// Exercise 3: Object Methods with 'this'
const calculator = {
    result: 0,
    add: function(num) {
        // TODO: Add to result
    },
    subtract: function(num) {
        // TODO: Subtract from result
    },
    clear: function() {
        // TODO: Reset result to 0
    }
};

// Exercise 4: Nested Objects
const school = {
    name: "JavaScript Academy",
    address: {
        // TODO: Add street, city, zip
    },
    courses: [
        // TODO: Add course objects with name and credits
    ]
};

// Exercise 5: Object Iteration
function printObjectProperties(obj) {
    // TODO: Iterate through object properties using for...in
    
}
```

### 06-decisions-loops/control-flow.js
```javascript
// Part 6: Decisions and Loops

// Exercise 1: If/Else Statements
function checkGrade(score) {
    // TODO: Return letter grade based on score
    // 90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: F
    
}

// Exercise 2: Switch Statement
function getDayName(dayNumber) {
    // TODO: Return day name (1=Monday, 7=Sunday)
    
}

// Exercise 3: Ternary Operator
function checkEligibility(age) {
    // TODO: Return "Eligible" if age >= 18, otherwise "Not eligible"
    
}

// Exercise 4: For Loop
function printPattern(n) {
    // TODO: Print a triangle pattern of asterisks
    // Example for n=3:
    // *
    // **
    // ***
    
}

// Exercise 5: While Loop
function factorial(n) {
    // TODO: Calculate factorial using while loop
    
}

// Exercise 6: For...of Loop
function sumArray(numbers) {
    // TODO: Sum array elements using for...of
    
}

// Exercise 7: Nested Loops
function multiplicationTable(size) {
    // TODO: Create a multiplication table
    
}

// Exercise 8: Break and Continue
function findFirstNegative(numbers) {
    // TODO: Find and return the first negative number
    // Use break when found
    
}
```

### 07-final-project/calculator.js
```javascript
// Final Project: Calculator

class Calculator {
    constructor() {
        this.result = 0;
        this.history = [];
    }
    
    // TODO: Implement calculator methods
    add(num) {
        // Add to result and update history
    }
    
    subtract(num) {
        // Subtract from result and update history
    }
    
    multiply(num) {
        // Multiply result and update history
    }
    
    divide(num) {
        // Divide result and update history
        // Handle division by zero
    }
    
    clear() {
        // Reset calculator
    }
    
    getResult() {
        // Return current result
    }
    
    getHistory() {
        // Return operation history
    }
}

// TODO: Create calculator instance and test all operations
```

## 🎯 Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| Comments & Variables | 10 | Proper use of comments, correct variable declarations |
| Data Types | 10 | Demonstrates understanding of all primitive types |
| Arrays & Strings | 15 | Correct implementation of methods and iterations |
| Functions | 15 | Various function types, proper scope understanding |
| Objects | 15 | Object creation, methods, and iteration |
| Control Flow | 15 | Correct implementation of conditionals and loops |
| Final Project | 20 | Working calculator with all features |
| **Total** | **100** | |

## 🏆 Bonus Challenges (Optional)
1. **Advanced Calculator** (+5 points): Add memory functions (M+, M-, MR, MC)
2. **Error Handling** (+5 points): Implement try-catch blocks in appropriate places
3. **ES6 Features** (+5 points): Use destructuring, spread operator, and rest parameters
4. **Code Documentation** (+5 points): Add JSDoc comments to all functions

## 📚 Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)

## 🤝 Submission Guidelines
1. Complete all exercises in their respective files
2. Ensure all code is properly commented
3. Test your solutions using the provided HTML files
4. Push your final code to GitHub
5. Submit the repository link through GitHub Classroom

## ❓ Getting Help
- Check the course discussion forum
- Attend office hours
- Create an issue in this repository
- Email the instructor with specific questions

Good luck with your assignment! 🚀
