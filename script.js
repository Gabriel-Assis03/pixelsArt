//localStorage.clear()
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const btnColorRandom = document.querySelector("#button-random-color");
if(JSON.parse(localStorage.getItem('colorPalette')) == null) {

    var colorPalette = {
        color2: "red",
        color3: "green",
        color4: "blue",
    }

}else {

var colorPalette = JSON.parse(localStorage.getItem('colorPalette'));

}

color2.style.background = colorPalette.color2;
color3.style.background = colorPalette.color3;
color4.style.background = colorPalette.color4;

function mathRandom(max, min) {
    return Math.floor(Math.random() * max+min);
}

btnColorRandom.addEventListener("click", () => {

    color2.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(255, 1)},${mathRandom(255, 1)})`

    color3.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(255, 1)},${mathRandom(255, 1)})`

    color4.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(255, 1)},${mathRandom(255, 1)})`

    colorPalette.color2 = color2.style.background;
    colorPalette.color3 = color3.style.background;
    colorPalette.color4 = color4.style.background;

    localStorage.setItem('colorPalette', JSON.stringify(colorPalette));

})