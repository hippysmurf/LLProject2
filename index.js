
// write to console
console.log("hello tracy");

// compare two numbers and return boolean
console.log(1 < 2);

// compare if strings are exactly equal
console.log("abc" === "Abc");

// comments can look like this
/* or like this */
console.log("hi there");

//strings are in quotes
//"they look like this";
//'or this';
//`or this`

// see what types variables are
console.log(typeof "this");

//booleans are true and false

//looks at value and type ===
//looks at only value ==

// not equal is value and type !== or just value != 

//variables
var firstName = "Tracy";
var age = 50;
var likesPizza = true;

console.log(firstName);
firstName = "Trixie";
console.log(firstName);

//function that console logs a firstName
function printName (name) {
  console.log(name);
};

//function that takes in two numbers and returns the largest numbers
function printLargestNum (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  }
  else {
    console.log(num2);
  }
};

printLargestNum (10, 20);

//comparing strings goes by alphabetical number, not by number of characters
 
// 0 to 9 is less than a,b,c,.. in comparisons

// concatinate name with last name
firstName = firstName + "jit";
console.log(firstName);

// write a function to greet 
function greet(greetName) {
    console.log("Good Morning "+ greetName);
};

// call function
greet("Tracy");

// divide function
function divideTwoNumbers(num1, num2) {
    return (num1 / num2);
};

// call it in a sexy way
console.log(divideTwoNumbers(10,2));

// function to check if strints are equal
function areStringsEqual (str1, str2) {
    return str1 === str2;
};

console.log(areStringsEqual('sunshine', 'sunshine'));
console.log(areStringsEqual('sunshine', 'pizza'));






