// Hello World

console.log("Hello World!")

// Variables are entities that can hold any data. Values can be reassigned and Var and Let are used to create variables
var firstName = "John"
let lastName = "Smith"
console.log(lastName)

var age, dateOfBirth, sex
age = "5"
dateOfBirth = "28-08-1993"
sex = "male"
console.log(age)
age = 6
console.log(age)


// Constants : The value assigned to constants cannot be changed during runtime
// Constants cannot be created without a value assigned unlike Variables. 
const Occupation = "Engineer"
console.log(Occupation)

// DataTypes
var middleAgeBrother = "Kwame" //string which means just a text
var ageOfBrother = 30 // number
var isHeMarried = false  //boolean: can have two values True/False
var yearsInMarriage = null //null: means we cannot have this value and indicates an expected result of having a value for the variable
var numberOfCars = undefined //undefined: We cannot use something that doesn't exist