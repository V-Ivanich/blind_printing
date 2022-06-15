import {basEngl} from "../modules/base.js"

const allBtn = document.querySelectorAll('.key_1')
let textIn = document.querySelector('.in_text'),
textOut = document.querySelector('.out_text')


let baseKey = Array.from(allBtn),
spN = '',
str =[]



function play_sound() {
  document.getElementById('audiotag1').play();
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function printOutRandom(){
let cikl = 0,
temp =''
  for(let i = 0; i< 43; i++){
    cikl = getRndInteger(0, 95)
    temp += basEngl[cikl]
  }
textIn.innerHTML = temp
str = textIn.innerText.split('')
console.log(temp.length)
}


function key_D(e){
  baseKey.forEach(elem => {
    if(elem.id == e.keyCode){
      elem.classList.add('activeKey')
    }
  })
  if(str[0] == e.key && e.key != 'Shift'){
    console.log(str[0]+ '=>' + e.key)
    textOut.innerHTML += str[0]
    spN += str[0]
    str.shift()
    textIn.innerHTML = `<span class="painting">${spN}</span>` + str.join('')
  }
  else {
    if(e.key != 'Shift')
    play_sound()
    return
  }
}

function  up_key(e){
  let x = String(e.keyCode)
  baseKey.forEach(elem => {
    if(elem.id == x){
      elem.classList.remove('activeKey')
    }
    if(x == 13 && str.lenght == 44){
      textIn.innerHTML = ''
      textIn.innerHTML = ''
      spN = ''
      printOutRandom()
    }
  })
}

printOutRandom()
addEventListener('keyup', up_key);

addEventListener('keydown', key_D);

