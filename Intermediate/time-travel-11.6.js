/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(`Destination: ${destination}`);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(`Destination: ${destination}`);


/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2030-03-15";
console.log(`Travel Date: ${travelDate}`);

/*
 * Observations:
 * TODO: Explain here.
 // If the value is changed with a const constructor, there will be a type error. Const cannot be changed one more time as it is fixed with the value only assigned once.  

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";

//Observations:
//When the console.log() value was declared, the value will print undefined when it is first declared without having the value being assigned. Once the variable is declared with var, the value will print once again after declaring those variables with the console.log() afterwards. 
 