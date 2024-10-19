export function printAge(age){
    console.log(age)
}

// create a class
class CustomerDetails {

    printFirstName(firstName){
        console.log(firstName)
    }
/**
 * This method will print the Last name
 * @param string lastName 
 */
    printLastName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()