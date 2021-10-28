const btnCriarCarta = document.querySelector('#criar-carta');
const inputTexto = document.querySelector('#carta-texto');
const cartaGerada = document.querySelector('#carta-gerada');

const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big',
  'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
// Source: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

function addItem() {
  const pegaConteudo = document.createElement('span');
  if (!inputTexto.value || !inputTexto.value.trim()) { // Source: https://stackoverflow.com/questions/33682536/how-can-trim-spaces-in-all-inputs-without-adding-methods-or-classes
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    // cartaGerada.appendChild(pegaConteudo);
  } else {
    cartaGerada.innerText = '';
    pegaConteudo.innerText = inputTexto.value.split(' ');
    const array = pegaConteudo.innerText;
    for (let index = 0; index < array.length; index += 1) {
      console.log(array);
      const randomElement = classes[Math.floor(Math.random() * classes.length)]; // gera aleatoriamente uma classe do array classes
      array[index].className = randomElement;
      cartaGerada.appendChild(pegaConteudo);
    }
  }
}
btnCriarCarta.addEventListener('click', addItem);
