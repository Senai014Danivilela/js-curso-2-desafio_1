let titulo = document.querySelector ('h1');
titulo.innerHTML = "hora do desafio";

function verifique(){
    console.log("o botao foi clicado")
}

function verifiqueAlert(){
    alert(" Eu amo JS")
}

function verifiquePrompt(){
    let cidade = prompt(" nome de uma cidade do Brasil");
    alert(`estive na cidade de ${cidade}`);
}

function verefiqueSoma(){
let numero1 = parseInt(prompt("digite um numero"));
let numero2 = parseInt(prompt("digite outro numero"));
let soma = numero1 + numero2;
alert(`E a soma deles sao ${soma}`);
}