// Variáveis
let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const inputNumber = document.querySelector('#inputNumber')

let xAttempts = 1

console.log(randomNumber)

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// funções
function handleTryClick(event) {
  event.preventDefault()

  if (Number(inputNumber.value == randomNumber)) {
    toggleScreen()

    screen2.querySelector(
      'h2'
    ).innerText = `Você acertou em ${xAttempts} tentativas.`

    document.addEventListener('keypress', function (e) {
      if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
      }
    })
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
  console.log(randomNumber)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
