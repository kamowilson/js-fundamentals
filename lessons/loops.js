// Loops

// this is an example of repeating the same print 5 times
// console.log('Hello World! ')
// console.log('Hello World! ')
// console.log('Hello World! ')
// console.log('Hello World! ')
// console.log('Hello World! ')



// for(statement1; statement2; statement3){

// }

// for loop (for i loop) is an optimised way to loop and print the same items
for(let i=0; i<5; i=i+1){
    console.log('Hello World! ')
}

var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){ //condition to break the loop when Toyota is found
        break
    }
}


// ES6 Syntax for each loop
cars.forEach(car => {
    console.log(car)
} )