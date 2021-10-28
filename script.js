const btnCriarCarta = document.querySelector('#criar-carta'); 
const inputTexto = document.querySelector('#carta-texto'); 
const cartaGerada = document.querySelector('#carta-gerada');

const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big',
  'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

function addItem() {
  const pegaConteudo = document.createElement('p');
  pegaConteudo.innerText = inputTexto.value;
  const randomElement = classes[Math.floor(Math.random() * classes.length)]; // gera aleatoriamente uma classe do array classes
  // Source: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  pegaConteudo.className = randomElement;
  cartaGerada.appendChild(pegaConteudo);
}

btnCriarCarta.addEventListener('click', addItem);
