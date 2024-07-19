//undefined = value not assigned typeof undefined is undefined  

//null = absence of any object value TYPEOF NULL IS OBJECT
//For example, if you expect an object to be assigned to a variable later, 
//you might initialize it with null to indicate that it's currently empty but not undefined.

let user; // user is undefined

function getUser() {
    // If user not found, return null
    return null;
}

if (user === undefined) {
    console.log("User is not defined yet.");
}

user = getUser();

if (user === null) {
    console.log("User not found.");
}

let user = null; // user is explicitly empty
// Later in the code
user = { name: "Alice" }; // user is now assigned an object


let fullName = "Bhagyashri";
console.log(typeof fullName);

//symbol - for unique value
