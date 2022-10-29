let textbox = document.getElementById("text");
let char = document.getElementById("ch");
let word = document.getElementById("word");

textbox.addEventListener("input", function () {
    let text = this.value;
    char.innerHTML = text.length;

    text = text.trim();
    let w = text.split(" ");
    let cleanW = w.filter(function (elm) {
        return elm != "";
    });
    word.innerHTML = cleanW.length;
});

function change(color) {
    document.body.style.backgroundImage = color;
}
