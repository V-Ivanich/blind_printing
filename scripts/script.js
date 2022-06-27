import {basEngl} from "../modules/base.js"

const allBtn = document.querySelectorAll('.key_1')
let textIn = document.querySelector('.in_text'),
textOut = document.querySelector('.out_text'),
btnInfo = document.querySelector('#btn_spr'),
err_r = document.querySelector('.err_or'),
winAlert = document.querySelector('#alert_s'),
visual_err = document.querySelector('.visual')

const btn_Begin = document.querySelector('#beginning'),
  btn_Midd = document.querySelector('#middle'),
  btn_Advan = document.querySelector('#advanced'),
  btn_ru = document.querySelector('#ru'),
  btn_us = document.querySelector('#us')


let baseKey = Array.from(allBtn), //! кнопки на виртуалке
spN = '',
str =[],
star,
er_ror = 0,
endTime


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function printOutRandom(){
let temp = getRndInteger(0, 55)
textIn.innerText = basEngl[temp]
str = textIn.innerText.split('') //? массив из строки
}

function show_error() {
  visual_err.classList.add('err_or_activ')
  setTimeout(() => {
    visual_err.classList.remove('err_or_activ')},
    200)
}

function settingsTime() {
  if(str.length == 50){
    star = new Date().getTime()
  }
  if(str.length == 1) {
    endTime = new Date().getTime()
    document.querySelector('.result').innerHTML = ' ' + (endTime - star)/1000 + 'sec.'
    err_r.innerHTML = ' Ошибок : ' + er_ror;
  }
}

btnInfo.onclick = () => {
  winAlert.classList.remove('no_activeAlert');
}
winAlert.addEventListener('click', () => {
  winAlert.classList.add('no_activeAlert');
})

function key_D(e){
    settingsTime()

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
  else if(e.key != 'Shift'){
    er_ror++
    err_r.innerHTML = ' Ошибок : ' + er_ror
    show_error();
  }
}

function  up_key(e){

  if(e.key == 'Enter' && str.length == 0){
    textOut.innerText = ''
    textIn.innerText = ''
    spN = ''
    er_ror = 0
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

