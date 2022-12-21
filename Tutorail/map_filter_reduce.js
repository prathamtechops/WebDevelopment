let arr = [1, 2, 3, 4, 5];

// let square = arr.map((ele) => {
//     return ele * ele;
// });

// square.forEach((ele) => console.log(ele));
let bigger = arr.filter((ele) => {
    return ele > 3;
});

console.log(bigger);
