const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (color) => window.getComputedStyle(color).backgroundColor;

// console.log(getBGColor(pink));

const magic = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color;
    });
};

magic(red, getBGColor(red));
magic(pink, getBGColor(pink));
magic(orange, getBGColor(orange));
magic(cyan, getBGColor(cyan));
magic(violet, getBGColor(violet));

center.addEventListener("mouseleave", () => {
    center.style.backgroundColor = grey;
});
