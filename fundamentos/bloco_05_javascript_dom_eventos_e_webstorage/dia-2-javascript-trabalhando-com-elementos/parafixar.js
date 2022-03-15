document.getElementById('elementoOndeVoceEsta');
document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'blue';
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Opa, bão memo?';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').nextSibling;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').children[2];

let irmao = document.createElement('section')
let pai = document.getElementById('pai')
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let filhoDoElementoOndeVoceEsta = document.createElement('section')
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section')

pai.appendChild(irmao);
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

console.log(filhoDoPrimeiroFilhoDoFilho.parentNode.parentNode.nextElementSibling)