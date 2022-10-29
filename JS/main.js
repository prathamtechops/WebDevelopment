// document.getElementById("test").innerHTML = "Kaki";
console.log("kaki");

function mul(n) {
    for (let i = 0; i < 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
function add() {
    if (arguments.length == 0) {
        console.log("No arguments passed");
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        console.log(sum);
    }
}

//Anonymous
// setTimeout(function () {
//   console.log("I like you");
// }, 3000);

//          //Immediate function
// (function () {
//   console.log("hi kaki");
// })();

//obeject

// let person = {
//     firstName: "Nidhi",
//     lastName: "Kaki",
//     age: 17,
//     hi() {
//         console.log("choti");
//     },
// };

// person.hello = () => console.log("Hello");

// person.hello();
// person.hi();

let btn = document.getElementById("btn");
let text = document.getElementById("test");
btn.addEventListener("click", function toggleHide() {
    if (text.style.display != "none") {
        text.style.display = "none";
    } else {
        text.style.display = "block";
    }
});

setInterval(function () {
    time = new Date();
    // // console.log(time);
    // document.getElementById("time").innerHTML = time;
}, 1000);

//random

let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//console.log(random(10, 20));

let person = {
    name: "John",
    age: 21,

    get getname() {
        return this.name;
    },
};

// console.log(person.getname);

function Student(firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
}

let student1 = new Student("kaki", "shigh", 17);
// console.log(student1);

student1.name = () => student1.firstName + " " + student1.lastName;

// console.log(student1.name());
// let el = document.getElementById("test");
// let h1 = document.createElement("h1");
// // let t = document.createTextNode("This is text node");
// // h1.appendChild(t);
// // el.appendChild(h1);
// // h1.className = "h1";
// h1.textContent = "This is text node";
// document.body.appendChild(h1);

// let element = document.getElementById("btn");
// let item = document.createElement("p");
// item.textContent = "I love you!";
// let bod = document.body;

// bod.replaceChild(item, element);

// let ob = {
//     greet: "hi",
//     names: ["Nidhi", "Kaki"],
//     speak() {
//         this.names.forEach((name) => {
//             console.log(this.greet + " " + name + " i like you");
//         });
//     },
// };

// ob.speak();

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    console.log("btn2 clicked");
});

let x = document.getElementById("name");

x.addEventListener("focus", () => {
    x.style.background = "rgba(187, 111, 200, 0.47)";
});

x.addEventListener("input", () => {
    console.log(x.value);
});
