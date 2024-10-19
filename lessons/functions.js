// Declarative Functions function always starts with the function keyword

function helloOne(){
    console.log('Hello one!')
}
helloOne()


// Anonymous function does not have a name and you need to assign the result to the variable
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()


// ES6 Function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!')
}
helloThree()


// Function with arguments
function printName(name){
    console.log(name)
}
printName('Kwame')


// Function with arguments
// function printName(name, lastName){
//     console.log(name + ' ' + lastName)
// }
// printName('Kwame', 'Wilson')


// // Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

// import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)