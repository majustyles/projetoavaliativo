/*
Início de função que verifica preenchimento de campos
*/

function verificar(){
var Email = document.getElementById('email').value; //variável que guarda valor de e-mail do formulário
var CPF = document.getElementById('cpf').value;
var fone = document.getElementById('fone').value;
var genero = document.getElementById('genero').value;


  if (!Email || !CPF || !fone || !genero) {
  alert("Campo não preenchidos, por favor preenchê-los");
  } else{
  alert("Campo preenchido com sucesso");
  }
}

/*
Final de função que verifica preenchimento de campos
*/

function maksfone(){
  var numeroAtual= document.getElementById('fone').value;
  const isCelular= numeroAtual.length === 11;
  const isFone= numeroAtual.length === 10;
  let numeroAjustado;
    if (isCelular) {
      const part1 = numeroAtual.slice(0,2);
      const part2 = numeroAtual.slice(2,7);
      const part3 = numeroAtual.slice(7,11);
      numeroAjustado = `(${part1}) ${part2}-${part3}`
    } else if(isFone){
      const part1 = numeroAtual.slice(0,2);
      const part2 = numeroAtual.slice(2,6);
      const part3 = numeroAtual.slice(6,10);
      numeroAjustado = `(${part1}) ${part2}-${part3}`
    } else{
        alert('Número informado é inválido')
    }
  fone.value = numeroAjustado;
}