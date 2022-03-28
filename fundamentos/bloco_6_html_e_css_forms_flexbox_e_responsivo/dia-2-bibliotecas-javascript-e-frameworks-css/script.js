let botao = document.getElementById('botao')
let foto = document.getElementById('foto')
let enviarFoto = document.getElementById('enviar-foto')
let texto = document.getElementById('texto')
let email = document.getElementById('email')
let nome = document.getElementById('nome')

enviarFoto.addEventListener('click', function(event){
    if(!foto.checked){
        event.preventDefault()
    }
})

botao.addEventListener('click', function(event){
    if(email.value.length < email.minLength || nome.value.length < nome.minLength){
        alert("Dados Inválidos")
    }else{
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
})
