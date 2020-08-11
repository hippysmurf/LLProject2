
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

// Object type
var bookTitle = {
    author: 'Name',
    yearPublished: 2000,
    good: true
};

// access either via bookTitle.good or bookTitle['Name']
console.log(bookTitle.good);

// Array type
var arrayName = ['Array thing 1', 'Array thing 2', 1];
// Access using index arrayName[0];

// for loop
//for (var index = 0; index < arrayName.length; index++) {
//    console.log(index);
//}

// while loop
/* var index = 0;
while (index < arrayName.length) {
    console.log(index++);
};

for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    }
};
*/ 
// fruits array
var faveFruits = ['pomegranate', 'orange', 'apple', 'mango', 'banana'];
for (var counter = 0; counter < faveFruits.length; counter++) {
    console.log(faveFruits[counter]);
};

// add fruit to the array
faveFruits.push('blueberry');

// use function 
function convertStringToDigits(myString) {
    myString.toLowerCase().split('');
    var returnNumber = '';
    for (var i = 0; i < myString.length; i++) {
        console.log(myString[i]);
        switch (myString[i]) {
            case 'a':
            case 'b':
            case 'c':
                returnNumber += '2';
                break;
            case 'd':
            case 'e':
            case 'f':
                returnNumber += '3';
                break;
            default:
                returnNumber += '4';
                break;
        } 
    }
    console.log(returnNumber.toString());
};

convertStringToDigits('aacfz');

function wordCount(wordsArray, searchWord) {
    var numTimes = 0;
    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === searchWord) {
            numTimes++;
        }
    }
    return numTimes;
  };

  myArray = ['cow', 'cat', 'dog', 'bunny', 'cow'];
  console.log(wordCount(myArray, 'bird'));