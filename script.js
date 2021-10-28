const btnCriarCarta = document.querySelector('#criar-carta'); 
const inputTexto = document.querySelector('#carta-texto'); 
const cartaGerada = document.querySelector('#carta-gerada');

function addItem() {
  const pegaConteudo = document.createElement('p');
  pegaConteudo.innerText = inputTexto.value;
  cartaGerada.appendChild(pegaConteudo);
}

btnCriarCarta.addEventListener('click', addItem);
