let body = document.getElementsByTagName('body')[0]
let p = document.getElementsByTagName('p')[0]
let inputCorDeFundo = document.getElementById('inputCorDeFundo')
let inputCorDoTexto = document.getElementById('inputCorDoTexto')
let inputTamanhoDaFonte = document.getElementById('inputTamanhoDaFonte')
let inputEspacamento = document.getElementById('inputEspacamento')
let inputTipoDaFonte = document.getElementById('inputTipoDaFonte')
let botao = document.getElementsByTagName('button')[0]

function aplicaCorDeFundo(){
  if(inputCorDeFundo.value !== ''){
    body.style.backgroundColor = inputCorDeFundo.value 
  }
  localStorage.setItem('usuario-cor-de-fundo', inputCorDeFundo.value)
}

function aplicaCorDoTexto(){
  if(inputCorDoTexto.value !== ''){
    body.style.color = inputCorDoTexto.value 
  }
  localStorage.setItem('usuario-cor-do-texto', inputCorDoTexto.value)
}

function aplicaTamanhoDaFonte(){
  if(inputTamanhoDaFonte.value !== ''){
    body.style.fontSize = inputTamanhoDaFonte.value 
  }
  localStorage.setItem('usuario-tamanho-da-fonte', inputTamanhoDaFonte.value)
}

function aplicaEspacamento(){
  if(inputEspacamento.value !== ''){
    body.style.lineHeight = inputEspacamento.value 
  }
  localStorage.setItem('usuario-espacamento', inputEspacamento.value)
}

function aplicaTipoDaFonte(){
  if(inputTipoDaFonte.value !== ''){
    body.style.fontFamily = inputTipoDaFonte.value 
  }
  localStorage.setItem('usuario-tipo-da-fonte', inputTipoDaFonte.value)
}

botao.addEventListener('click', function(){
  aplicaCorDeFundo();
  aplicaCorDoTexto();
  aplicaTamanhoDaFonte();
  aplicaEspacamento();
  aplicaTipoDaFonte();
})

window.onload = function(){
  body.style.backgroundColor = localStorage.getItem('usuario-cor-de-fundo')
  body.style.color = localStorage.getItem('usuario-cor-do-texto')
  body.style.fontSize = localStorage.getItem('usuario-tamanho-da-fonte')
  body.style.lineHeight = localStorage.getItem('usuario-espacamento')
  body.style.fontFamily = localStorage.getItem('usuario-tipo-da-fonte')
}