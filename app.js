// variable equal to my age
const myAge = 38;
// a changing variable
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//subtract 2 from the variable myAge
let laterYears = myAge - 2;
// calculate dog years for laterYears
laterYears *= 4;

console.log(earlyYears, laterYears);
// calculates my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
// name as string with method toLowerCase
const myName = 'Matt Wright'.toLowerCase();
// print the result in statement using string interpolation
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
