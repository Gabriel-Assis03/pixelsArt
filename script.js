// localStorage.clear()
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');
const btnColorRandom = document.querySelector('#button-random-color');
let tela = 5;

// tamanho da tela

const btnVQV = document.querySelector('#generate-board');
btnVQV.addEventListener('click', () => {
  const text = document.querySelector('#board-size');
  let tamanho = text.value;
  tamanho = parseInt(tamanho);
  if (tamanho > 0) {
    tela = tamanho;
  }
});

if (JSON.parse(localStorage.getItem('colorPalette')) == null) {
  var colorPalette = {
    color2: 'red',
    color3: 'green',
    color4: 'blue',
  };
} else {
  var colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
}

color2.style.background = colorPalette.color2;
color3.style.background = colorPalette.color3;
color4.style.background = colorPalette.color4;

function mathRandom(max, min) {
  return Math.floor(Math.random() * max + min);
}

btnColorRandom.addEventListener('click', () => {
  color2.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(
    255,
    1
  )},${mathRandom(255, 1)})`;

  color3.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(
    255,
    1
  )},${mathRandom(255, 1)})`;

  color4.style.background = `rgb(${mathRandom(255, 1)},${mathRandom(
    255,
    1
  )},${mathRandom(255, 1)})`;

  colorPalette.color2 = color2.style.background;
  colorPalette.color3 = color3.style.background;
  colorPalette.color4 = color4.style.background;

  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
});

// Tela de pixels

const pixelBoard = document.querySelector('#pixel-board');
for (let index = 0; index < tela; index += 1) {
  const div = document.createElement('div');
  pixelBoard.appendChild(div);
  for (let index2 = 0; index2 < tela; index2 += 1) {
    const div2 = document.createElement('div');
    div2.className = 'pixel';
    div2.id = index + '' + index2;
    div.appendChild(div2);
  }
}

// selecionar cor

color1.addEventListener('click', () => {
  if (color1.classList.contains('selected')) {
  } else {
    color2.classList.remove('selected');
    color3.classList.remove('selected');
    color4.classList.remove('selected');
    color1.classList.add('selected');
  }
});

color2.addEventListener('click', () => {
  if (color2.classList.contains('selected')) {
  } else {
    color1.classList.remove('selected');
    color3.classList.remove('selected');
    color4.classList.remove('selected');
    color2.classList.add('selected');
  }
});

color3.addEventListener('click', () => {
  if (color3.classList.contains('selected')) {
  } else {
    color2.classList.remove('selected');
    color1.classList.remove('selected');
    color4.classList.remove('selected');
    color3.classList.add('selected');
  }
});

color4.addEventListener('click', () => {
  if (color4.classList.contains('selected')) {
  } else {
    color2.classList.remove('selected');
    color3.classList.remove('selected');
    color1.classList.remove('selected');
    color4.classList.add('selected');
  }
});

// Gardando a cor dos pixels

const pixel = document.querySelectorAll('.pixel');
// localStorage.clear()
if (JSON.parse(localStorage.getItem('pixelBoard')) == null) {
  let p = [];
  for (let index = 0; index < tela * tela; index += 1) {
    p.push('white');
  }
  let colorPixels = {
    corPixels: p,
  };
  localStorage.setItem('pixelBoard', JSON.stringify(colorPixels));
} else {
  var colorPixels = JSON.parse(localStorage.getItem('pixelBoard'));
  var colorPositionPixel = colorPixels.corPixels;
  for (let index = 0; index < tela * tela; index += 1) {
    pixel[index].style.background = colorPositionPixel[index];
  }
}

// pintando os pixels

for (let index = 0; index < tela * tela; index += 1) {
  pixel[index].addEventListener('click', () => {
    if (color1.classList.contains('selected')) {
      pixel[index].style.background = 'black';
    }
    if (color2.classList.contains('selected')) {
      const color = color2.style.background;
      pixel[index].style.background = color;
    }
    if (color3.classList.contains('selected')) {
      const color = color3.style.background;
      pixel[index].style.background = color;
    }
    if (color4.classList.contains('selected')) {
      const color = color4.style.background;
      pixel[index].style.background = color;
    }
  });
  pixel[index].addEventListener('click', () => {
    colorPositionPixel[index] = pixel[index].style.background;
    colorPixels.corPixels = colorPositionPixel;
    localStorage.setItem('pixelBoard', JSON.stringify(colorPixels));
  });
}

// botao de limpar a tela

const limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', () => {
  for (let index = 0; index < tela * tela; index += 1) {
    pixel[index].style.background = 'white';
    colorPositionPixel[index] = pixel[index].style.background;
    colorPixels.corPixels = colorPositionPixel;
    localStorage.setItem('pixelBoard', JSON.stringify(colorPixels));
  }
});
