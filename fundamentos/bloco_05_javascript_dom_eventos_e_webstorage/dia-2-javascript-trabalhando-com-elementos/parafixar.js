document.getElementById('elementoOndeVoceEsta');
document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'blue';
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Opa, bão memo?';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').nextSibling;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').children[2];

let irmao = document.createElement('section')
irmao.className = 'irmao'
let pai = document.getElementById('pai')
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let filhoDoElementoOndeVoceEsta = document.createElement('section')
filhoDoElementoOndeVoceEsta.className = 'filhoDoElementoOndeVoceEsta'
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section')
filhoDoPrimeiroFilhoDoFilho.className = "filhoDoPrimeiroFilhoDoFilho"

pai.appendChild(irmao);
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

filhoDoPrimeiroFilhoDoFilho.parentNode.parentNode.nextElementSibling;

let paiDoPai = document.getElementById('paiDoPai')
let primeiroFilho = document.getElementById('primeiroFilho')
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
let terceiroFilho  = document.getElementById('terceiroFilho')
let quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho')

pai.removeChild(primeiroFilho)
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho)
pai.removeChild(terceiroFilho)
pai.removeChild(quartoEUltimoFilho)
pai.removeChild(irmao)
elementoOndeVoceEsta.removeChild(filhoDoElementoOndeVoceEsta)
primeiroFilhoDoFilho.removeChild(filhoDoPrimeiroFilhoDoFilho)