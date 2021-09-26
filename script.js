var numeroSecreto = parseInt(Math.random() * 11);
var contador = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Favor digitar um número entre 0 e 10!";
  } else {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você adivinho!";
    } else if (contador == 0) {
      elementoResultado.innerHTML =
        "Você atingiu o limite de tentativa!<br>O número secreto era: " +
        numeroSecreto;
    } else {
      contador--;
      if (chute < numeroSecreto) {
        elementoResultado.innerHTML =
          "Você errou, tente um número maior.<br>Você tem mais " +
          contador +
          " tentativas!";
      } else {
        elementoResultado.innerHTML =
          "Você errou, tente um número menor.<br>Você tem mais " +
          contador +
          " tentativas!";
      }
    }
  }
}