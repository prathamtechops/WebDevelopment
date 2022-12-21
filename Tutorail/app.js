const choices = ["rock", "paper", "scissors"];

let computer_choice = () => {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};
let player_choice = () => {
    let choice = prompt("What do you choose?");
    return choice;
};

let c = computer_choice();
console.log(c);

let p = player_choice();
console.log(p);

if (p === c) {
    console.log("Draw");
}
if (p == "rock" && c == "paper") {
    console.log("you lose");
}
if (p == "rock" && c == "scissors") {
    console.log("you win");
}
if (p == "scissors" && c == "paper") {
    console.log("you win");
}
if (p == "scissors" && c == "rock") {
    console.log("you lose");
}
if (p == "paper" && c == "rock") {
    console.log("you lose");
}
if (p == "paper" && c == "scissors") {
    console.log("you win");
}

let arr = [3, 4, 5, 6, 1, 2];

let val = function (arr) {
    let m = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < m) {
            m = arr[i];
        }
    }
    return m;
};
