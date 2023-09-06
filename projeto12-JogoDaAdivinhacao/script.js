//Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnter)

//funções callback
function handleTryClick (event) {
  event.preventDefault() // não faça o padrão / não envie o formulário ao clicar no botão

  const inputNumber = document.querySelector("#inputNumber")
    
    if(inputNumber.value < 0 || inputNumber.value > 10) {
      alert("Escolha um número entre 0 e 10!")
      return
    }

    if(inputNumber.value == "") {
      alert("Você precisa adicionar um número antes!")
      return
    }


    if(Number(inputNumber.value) == randomNumber){
      screen1.classList.add("hide")
      screen2.classList.remove("hide")

      document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
      
    }
    inputNumber.value = ""
    xAttempts++
  
}

function handleResetClick () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function handleEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}


/* Limite de clicar apenas entre 0 e 10 */