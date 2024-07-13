
var area = document.getElementById('area')

function entrar(){
    
var nome = prompt("Qual é seu nome ?");
var sobrenome = prompt("qual seu sobrenome");
var idade = prompt("qual sua idade");


if (nome, sobrenome === '' || nome === null) {

    alert("voce não colocou nada, seu otario!") 
    area.innerHTML = "voce não colocou nada, seu otario!"
}

else{

    area.innerHTML = "Olá, " + nome + " " + sobrenome + " voce tem" + idade +  "anos de idade!  "

    let botaoSaida = document.createElement("button")
    botaoSaida.innerHTML = "Sair"
    botaoSaida.onclick = Sair;
    area.appendChild(botaoSaida)
}

}

function Sair(){
    alert("até mais!")
    area.innerHTML = "voce saiu"
}
