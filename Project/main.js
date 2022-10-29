let flag = 1;

function controller(x) {
    flag = flag + x;
    slideShow(flag);
}
slideShow(flag);

function slideShow(num) {
    let slide = document.getElementsByClassName("slide");
    if (num == slide.length) {
        num = 0;
        flag = 0;
    }
    if (num < 0) {
        flag = slide.length - 1;
        num = slide.length - 1;
    }
    for (let y of slide) {
        y.style.display = "none";
    }
    slide[num].style.display = "block";
}
