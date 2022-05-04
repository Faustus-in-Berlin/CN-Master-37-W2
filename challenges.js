function reverseString(str) {
    console.log(str.split("").reverse().join(""));
}

reverseString("Hello");

// console.log("Hello World!");
// console.error("This is an error!");
// console.warn("This is a warning!");


let shoppingList = [["Pasta", "Sauce", "Basil"], ["Chicken", "Rice", "Soya Milk"], ["Bananas", "Pineapples", "Mangos"]];

console.log(shoppingList[1] [2]);


const dataChecker = (string, rank) => {
    if (string == "codenation" && rank == 1) {
    console.log(`When it comes to coding, ${string} is ranked at number ${rank}.`);
    }
    else if (string == "codenation" && rank != 1) {
    console.log(`${string} are taking a short breather at number ${rank}, as they prepare to take the number 1 ranking.`);
    }
    else {
    console.log("Rankings are not worth the paper they're no longer printed on.");
    } 
}

dataChecker("codenation", 1);
dataChecker("codenation", 2);
dataChecker("abc", 9);
