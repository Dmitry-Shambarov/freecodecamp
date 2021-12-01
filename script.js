

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