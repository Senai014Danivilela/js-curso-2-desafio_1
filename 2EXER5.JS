let numero = parseInt(prompt("digite um numero"));
let contador = 1;


while (contador < 11){
    let resultado = contaNumero(numero);
    function contaNumero(numero){
        return numero*contador;
    }
    console.log (`${numero}X${contador}=${resultado}`);
    contador++;
}


//resoluçao
//let numero = parseInt(prompt("digite um numero"));
//function calculoTabuada(parNumero{
  //  for (let i =1; i<=10; i++){
   // let resultado = parNumero*i;
 //  console.log(`${parNumero} X ${i} = ${resultado} `)
   //}
//}
//   calculoTabuada(numero)