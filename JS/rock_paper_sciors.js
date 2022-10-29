// const choices = ["rock", "paper", "scissors"];

// let computer_choice = () => {
//     let random = Math.floor(Math.random() * 3);
//     if (random === 0) {
//         return "rock";
//     } else if (random === 1) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// };
// let player_choice = () => {
//     let choice = prompt("What do you choose?");
//     return choice;
// };

// let c = computer_choice();
// console.log(c);

// let p = player_choice();
// console.log(p);

// if (p === c) {
//     console.log("Draw");
// }
// if (p == "rock" && c == "paper") {
//     console.log("you lose");
// }
// if (p == "rock" && c == "scissors") {
//     console.log("you win");
// }
// if (p == "scissors" && c == "paper") {
//     console.log("you win");
// }
// if (p == "scissors" && c == "rock") {
//     console.log("you lose");
// }
// if (p == "paper" && c == "rock") {
//     console.log("you lose");
// }
// if (p == "paper" && c == "scissors") {
//     console.log("you win");
// }

// let arr = [3, 4, 5, 6, 1, 2];

// let val = function (arr) {
//     let m = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < m) {
//             m = arr[i];
//         }
//     }
//     return m;
// };

// console.log(val);
// var num = 123;
// console.log(num.toPrecision(1));
// var num = 123;
// console.log(num.toPrecision(2));
// var num = 15;
// console.log(num.toPrecision());

// num = 123;

// console.log(num.toPrecision(2));

// var num = 106;
// console.log(num.toExponential(1));
// console.log(parseInt((100).toString(2), 2));

// var binNum = "10110";
// var hex = parseInt(binNum, 2);

// function betterPrecision(num, precision) {
//     console.log(num.toPrecision(precision));
// }

// // document.getElementById("nums").innerHTML = hex;
// betterPrecision(124, 1);
// betterPrecision(124, 2);

// betterPrecision(178, 2);
// betterPrecision(17000, 1);
// betterPrecision(17000, 2);

// betterPrecision(17000, 3);

// betterPrecision(389520, 4);

let str = "10 tips to become successful";

function toTitle(str) {
    let arr = str.split(" ");
    let newString = "";
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return newString;
}

// toTitle(str);

// function toUpper(str) {
//     let uppercaseStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if ("a" <= str[i] && str[i] <= "z")
//             uppercaseStr += String.fromCharCode(str[i].charCodeAt(0) - 32);
//         else uppercaseStr = uppercaseStr + str[i];
//         console.log(str[i]);
//     }
//     return uppercaseStr;
// }

// console.log(toUpper(str));
var items = [
    "Oranges",
    "Oregano",
    "Mozzarella cheese",
    "Milk",
    "Detergent powder",
];

// let nums = document.getElementsById("nums").innerHTML(
//     "<ol>" +
//         items.map(function (item) {
//             return `<li>${item}</li>`;
//         }) +
//         "</ol>"
// );

function toListItemElement(item) {
    return `<li>${item}</li>`;
}

document.write("<ol>" + items.map(toListItemElement).join("") + "</ol>");
