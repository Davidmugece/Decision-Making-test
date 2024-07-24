function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Test the function
const age = 15;
const price = getTicketPrice(age);
console.log(`The ticket price for age ${age} is $${price}.`);
