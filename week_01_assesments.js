// ---------------------------- //
//          METADATA            //
// ---------------------------- //
// 1) Lang Type = JavaScript
// 2) Type Case = Camel
// 3) Doc Type = 
// [1]  @desc for description of functions
// [2] @arg for arguments functions take
// [3] @returns returns for functions
// [4] @note for anu important note



// ---------------------------- //
// Assement Ex-01 - Activity 5 //
// ---------------------------- //
console.log("-------------------ASSESSMENT EXERCISE 01 ---------------------------\n");
// Step 1 - create a var name num 
// @note : I am choosing a random number between 0 and 10 
let num = Math.floor(Math.random() * 10);
// Step 2 - A) If it is divisible by 5 log "buzz"
// B) if it is divisible by 3 log "fizz"
// C) if it is divisble by 3 and 5 log "fizz buzz"
if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz");
}
else if (num % 3 == 0) {
    console.log("fizz");
}
else if (num % 5 == 0) {
    console.log("buzz");
}
else {
    console.log(`Chosen number is : ${num}`);
}


// ---------------------------- //
// Assement Ex-02 - Activity 5 //
// ---------------------------- //
console.log("\n-------------------ASSESSMENT EXERCISE 02 ---------------------------\n");

// Step 1 - Generate a random number between 1 and 30 , DO IT x6
for (let i = 0; i < 6; i++) {
    let randNo = Math.floor(Math.random() * 30) + 1;

    // Step 2 - Check if divisible by 7
    if (randNo % 7 == 0) {
        console.log(`The number : ${randNo} is divisible by 7`);
    }
    else {
        console.log(`The number : ${randNo} is NOT divisible by 7`);
    }
}




// ---------------------------- //
// Assement Ex-03 - Activity 2 //
// ---------------------------- //
console.log("\n-------------------ASSESSMENT EXERCISE 03 ---------------------------\n");

// Step 1 - Generate 6 rand nums between 1 and 50 
for (let i = 0; i < 6; i++) {
    let randNo = Math.floor(Math.random() * 30) + 1;

    // Step 2 - log them to console
    console.log(`Random number generated at iter : ${i} is : ${randNo}`);
}




// ---------------------------- //
// Assement Ex-04 - Activity 3 //
// ---------------------------- //
console.log("\n-------------------ASSESSMENT EXERCISE 04 ---------------------------\n");

// Step 1 - Create a loop to log 0-9
console.log(`[Info] Now counting from 0-9 ...`)
for (let i = 0; i <= 9; i++) {
    console.log(`${i}`);
}

// Step 2 - Do the same for 9-0
console.log(`[Info] Now counting from 9-0 ...`)
for (let i = 9; i >= 0; i--) {
    console.log(`${i}`);
}




// ---------------------------- //
// Assement Ex-05 - Activity 2 //
// ---------------------------- //
console.log("\n-------------------ASSESSMENT EXERCISE 05 ---------------------------\n");

// Step 1 - Create an object pet with keys : name, typeOfPet, age, colour
let pet = {
    name: "Spike",
    typeOfPet: "Great Dame",
    age: "7",
    colour: "Grey Skin w Pale Yellow Highlights",

    // Step 2 -- Add two methods "eat" and "drink" -- BOTH return a STRING
    // STING says "$Your dog{this.name} is eating/drinking"
    eat() {
        return `Your dog ${this.name} is eating`;
    },
    drink() {
        return `Your dog ${this.name} is drinking`;
    }
};
console.log(pet.eat() + '\n' + pet.drink());



// ---------------------------- //
// Assement Ex-06 - Activity 3 //
// ---------------------------- //
console.log("\n-------------------ASSESSMENT EXERCISE 06 ---------------------------\n");

// Step 1 - Create a variable called password
let password = "YIADf75156Fdqhgcv";

// Step 2 - Check if password length is less than 8
if (password.length < 8) {
    console.log(`Password : ${password} is too short`);
}
else {
    console.log(`Password : ${password} is sufficiently large`);
}



// ---------------------------- //
// Assement Ex-07 - Activity 4 //
// ---------------------------- //
console.log("\n-------------------ASSESSMENT EXERCISE 07 ---------------------------\n");

// Step 1 - Create a variable num
let num2 = 1;

// Step 2 - Check if it is divisible by 3 or 5
if (num2 % 3 == 0 || num2 % 5 == 0) {
    console.log(`The number : ${num2} is divisible by 3 OR 5`);
}
else {
    console.log(`The number : ${num2} is NOT divisible by 3 OR 5`);
}