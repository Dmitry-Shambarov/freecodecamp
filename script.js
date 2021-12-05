

// Manipulate Arrays With shift()
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray = myArray.shift();


// Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);


//Shopping List
const myList = [];
myList.push(["Hello", 1]);
myList.push(["Hell", 2]);
myList.push(["Hel", 3]);
myList.push(["He", 4]);
myList.push(["H", 5]);


//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World")
  };
  
  reusableFunction();


  //Passing Values to Functions with Arguments
  function functionWithArgs(a, b) {
    console.log(a + b)
    };
    functionWithArgs(1, 2);


    //Return a Value from a Function with Return
    function timesFive(num) {
        return num * 5
        };


        //Global Scope and Functions
        // Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
};

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
  let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
return 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();


//
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


//Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


//Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    let newItem = arr.shift()
    
    return newItem;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //Understanding Boolean Values
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }


  //Use Conditional Logic with If Statements
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue) {
    return 'Yes, that was true'
  } else {
    return 'No, that was false'
  }
  // Only change code above this line
  
  }

  //Adding a Default Option in Switch Statements
  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 'a':
    answer = 'apple';
    break;
    case 'b':
    answer = 'bird';
    break;
    case 'c':
    answer = 'cat';
    break;
    case 'd':
    answer = 'stuff';
    break;
    default:
    answer = 'stuff';
    break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);


  //Using the Test Method
  let myString = "Hello, World!";
let myRegex = /W/;
let result = myRegex.test(myString); // Change this line

//Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
 switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');