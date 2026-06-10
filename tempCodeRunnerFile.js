// User Data
let userName = "Abhay";
let age = 19;

// Verification Function
function verifyUser() {

    console.log("Checking User...");

    // Verification
    if (age >= 18) {
        console.log("Welcome " + userName);
        console.log("You are eligible.");
    } 
    else {
        console.log("Sorry " + userName);
        console.log("You are under age.");
    }

    // Data Types
    console.log("\nData Types:");
    console.log(typeof userName);
    console.log(typeof age);
}

// Function Call
verifyUser();