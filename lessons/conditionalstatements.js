// Conditional Statement is needed when you need to split the flow of your application based on your defind conditions

// if(condition){
//     // execute some code here
// } else {
//     // execute some code here
// }

// If hour between 6 and 12, print "Good Morning"
// If hour between 12 and 18, print "Good Afternoon"
// Otherwise: We print "Good Evening"

// EXAMPLE
var hour = 8

if (hour >= 6 && hour <12 ){
    console.log('Good Morning')
} else if ( hour >=12 && hour < 18){
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

// EXAMPLE
var ageIsMoreThanEighteen = false
var isUSCitizen = false

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log('Customer is eligible for DL')
} else {
    console.log('Customer is NOT eligible for DL')
}
    
// var eligibilityForDriversLicence = ageIsMoreThanEighteen || isUSCitizen
// console.log('This customer is eligible for DL: ' + eligibilityForDriversLicence)
