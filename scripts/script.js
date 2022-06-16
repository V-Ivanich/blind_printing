import {basEngl} from "../modules/base.js"

const allBtn = document.querySelectorAll('.key_1')
let textIn = document.querySelector('.in_text'),
textOut = document.querySelector('.out_text')


let baseKey = Array.from(allBtn), //! кнопки на виртуалке
spN = '',
str =[]


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function printOutRandom(){
let temp = getRndInteger(0, 55)
textIn.innerText = basEngl[temp]
str = textIn.innerText.split('') //? массив из строки

}


function key_D(e){
  baseKey.forEach(elem => {
    if(elem.id == e.keyCode){
      elem.classList.add('activeKey')
    }
  })
  if(str[0] == e.key && e.key != 'Shift'){
    textOut.innerHTML += str[0]
    spN += str[0]
    str.shift()
    textIn.innerHTML = `<span class="painting">${spN}</span>` + str.join('')
  }
  else return
}

function  up_key(e){
  if(e.key == 'Enter' && str.length == 0){
    textOut.innerText = ''
    textIn.innerText = ''
    spN = ''
    printOutRandom()
  }
  let x = String(e.keyCode)

  baseKey.forEach(elem => {
    if(elem.id == x){
      elem.classList.remove('activeKey')
    }
    else return
  })
}

printOutRandom()
addEventListener('keyup', up_key);

addEventListener('keydown', key_D);

