

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

