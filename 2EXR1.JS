let altura = parseFloat(prompt("qual a sua altura "));
let peso  = parseFloat(prompt("qual é o seu peso"));
let imc;

function calculoIMC(parPeso , parAltura){
    return parPeso/(parAltura*parAltura);
}
imc = calculoIMC(peso,altura);
alert(` O IMC é igual a ${imc.toFixed(2)}`);