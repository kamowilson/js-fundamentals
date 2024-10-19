// Concatination and Interpolation
var price = 90
var itemName = "Cup"
var messageToPrint = "The price of your " +itemName+ " is "+price+" dollars" //if you have two strings together, it's concatination. 
console.log(messageToPrint)

// Interpolation
var price = 40
var messageToPrint2 = `The price of your ${itemName} is ${price} dollars`
console.log(messageToPrint2)