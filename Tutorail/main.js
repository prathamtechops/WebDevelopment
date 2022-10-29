var obj = { a: "old" };
obj.b = "old";

// Object.defineProperty(obj, "c", {
//     value: "old",
//     writable: true,
// });

// console.log(obj.c);

// obj.c = "new";

// console.log(obj.c);

var nums = [1, 2, 3, 4, 5, 6, 7];
var states = new Array("Rajastan", "Delhi", "Assam");

console.log(states);

console.log(Array.from("Nidhi"));

// var isEven = (element) => element % 2 === 0;

// console.log([2, 4, 5, 6].every(isEven));

// console.log([2, 4, 6].every((e) => e % 2 === 0));

var array = [2, 1, 5, 1, 2, 7, 4, 6];

// console.log(array.fill("h", 2, 5));

// var odd_nums = array.filter((num) => num % 2 !== 0);

// var even_nums = array.filter((num) => num % 2 === 0);

// console.log(odd_nums);
// console.log(even_nums);

const user = {
    name: "Pratham",
    loginCount: 1,
    googleSignedIn: true,
    courseList: [],
    buyCourse: function (course) {
        this.courseList.push(course);
    },
    getCourseCount: function () {
        return `${this.name} has ${this.courseList.length} courses`;
    },
};

console.log(user.getCourseCount());
user.buyCourse("C++");
console.log(user.getCourseCount());
