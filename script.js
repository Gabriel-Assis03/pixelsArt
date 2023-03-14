const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const btnColorRandom = document.querySelector("#button-random-color");

function mathRandom(max, min) {
    return Math.floor(Math.random() * max+min);
}

//console.log(Math.floor(Math.random() * 255+1));

btnColorRandom.addEventListener("click", () => {

    color2.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(255, 1)},${mathRandom(255, 1)})`

    color3.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(255, 1)},${mathRandom(255, 1)})`

    color4.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(255, 1)},${mathRandom(255, 1)})`

})