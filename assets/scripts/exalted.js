document.getElementById('roll').addEventListener('click', exalted)
const resultInput = document.getElementById('result')
const log = document.getElementById('log')
const results = document.getElementById('results')
const diceInput = document.getElementById('diceInput')
const resultsArr = []
var dice = new Audio('/exalted-diceroll/src/sfx/dice.mp3')

function diceSound () {
  dice.play()
}



function exaltedD10(){
  const d10 = Math.floor(Math.random()*10 + 1)
  let result = ''
  if(d10 == 10){
    diceSound()
    const print = 2
    result = 'Two Successes'
    console.log(d10 + ' | ' + result)
    log.innerText += ` ${d10} | `
    resultsArr.push(print)
  }else if(d10 >= 7){
    diceSound()
    const print = 1
    result = 'Success'
    console.log(d10 + ' | ' + result)
    log.innerText += ` ${d10} | `
    resultsArr.push(print)
  }else{
    diceSound()
    const print = 0
    result = 'Fail'
    console.log(d10 + ' | ' + result)
    log.innerText += ` ${d10} | `
    resultsArr.push(print)
  }
  return d10 
  
}

function exalted(){
  resultsArr.length = 0
  results.innerText = ''
  log.innerText = ''
for(let i = 1; i <= diceInput.value; i++){
  exaltedD10()

}
const sum = resultsArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  )
  results.innerText = sum
}
//---------------------------------------
const characterImg = document.getElementById('characterImg')
const characterText = document.getElementById('characterText')
const characterName = document.getElementById('characterName')

function randomChar() {
  const result = Math.floor(Math.random()*5 + 1)
  if(result === 1)  {
    characterText.innerText = '"Não creio que isto venha a ser o ideal..."'
    characterImg.dataset.src = '/exalted-diceroll/src/images/round-vigilius.png'
    characterName.innerText = '"Aurelius" Vigilius Melchiorre'
  }
  if(result === 2)  {
    characterText.innerText = '"Essa é uma PÉSSIMA ideia..."'
    characterImg.src = '/exalted-diceroll/src/images/round-nahr.png'
    characterName.innerText = '"Nahr"'
  }
  if(result === 3)  {
    characterText.innerText = '"Você devia se soltar um pouco mais, rapaz!"'
    characterImg.src = '/exalted-diceroll/src/images/round-gustaff.png'
    characterName.innerText = 'Gustaff'
  }
  if(result === 4)  {
    characterText.innerText = '"A gente precisa se ajudar, pessoal!"'
    characterImg.src = '/exalted-diceroll/src/images/round-kiora.png'
    characterName.innerText = 'Kiora Ashiok'
  }
  if(result === 5)  {
    characterText.innerText = '"Que tal relaxar um pouco, pessoal?"'
    characterImg.src = '/exalted-diceroll/src/images/round-florence.png'
    characterName.innerText = 'Florence'
  }
}

randomChar()
