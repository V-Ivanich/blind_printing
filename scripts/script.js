import {basEngl} from "../modules/base.js";
import { beginWords } from "../modules/beginer.js";
import { rus } from "../modules/rus.js";

const allBtn = document.querySelectorAll('.key_1')
let textIn = document.querySelector('.in_text'),
btnInfo = document.querySelector('#btn_spr'),
err_r = document.querySelector('.err_or'),
winAlert = document.querySelector('#alert_s'),
shiftKey = document.querySelectorAll('.keyShift'),
visual_err = document.querySelector('.visual')

let audioYes = new Audio('./audio/yes.mp3');
let audioNo =new Audio('./audio/no.mp3')

const btn_Begin = document.querySelector('#beginning'),
  btn_Midd = document.querySelector('#middle'),
  btn_Advan = document.querySelector('#advanced'),
  btn_ru = document.querySelector('#ru'),
  btn_us = document.querySelector('#us'),
  btn_restart = document.querySelector('#res_btn')


let baseKey = Array.from(allBtn), //! кнопки на виртуалке
spN = '',
str =[],
star,
er_ror = 0,
lengStr = 0,
anvanFlag = false,
active_dictionary = beginWords.words,
endTime


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function resetAll(){ //? перезапуск
  textIn.innerText = ''
  spN = ''
  er_ror = 0
}

//! кнопки выбора уровня сложности
btn_Advan.addEventListener('click', () => {
  active_dictionary = basEngl.words
  anvanFlag = true
  printOutRandom()
})
btn_Midd.addEventListener('click', () => {
  active_dictionary = basEngl.words
  anvanFlag = false
  printOutRandom()
})
btn_Begin.addEventListener('click', () => {
  active_dictionary = beginWords.words
  anvanFlag = false
  printOutRandom()
})


//! функция создания и отрисовки строки
function printOutRandom(){
  let temp = getRndInteger(0, active_dictionary.length - 1)//? получение строки
  if(active_dictionary.flag == '1'){
    textIn.innerText = active_dictionary[temp]
    } else {
      let tempStr = active_dictionary[temp]
      const dublicate = tempStr
      while(tempStr.length < 56){
        let prom = tempStr.length + dublicate.length + 1
        if(prom > 56){
        break
        } else
          tempStr += ' ' + dublicate
      }
    textIn.innerText = tempStr

    console.log(tempStr.length)

    }
  str = textIn.innerText.split('') //? массив из строки
  lengStr = str.length
}

function show_error() {
  visual_err.classList.add('err_or_activ')
  setTimeout(() => {
    visual_err.classList.remove('err_or_activ')},
    100)
}

function settingsTime() {
  if(str.length == lengStr){ //? начало отсчета таймера
    star = new Date().getTime()
  }
  if(str.length == 1) {
    endTime = new Date().getTime() //? 'конец' таймера
    let temp = parseInt(3000/((endTime - star)/1000))
    document.querySelector('.result').innerHTML = ' ' + temp + ' сим. в мин.'
    err_r.innerHTML = ' Ошибок : ' + er_ror;
  }
}

btn_restart.addEventListener('click', () => {
  resetAll();
  printOutRandom();
  document.querySelector('.result').innerHTML = ''
  err_r.innerHTML = ' Ошибок : ' + er_ror;
  show_error();
})

btnInfo.onclick = () => {
  winAlert.classList.remove('no_activeAlert');
}
winAlert.addEventListener('click', () => {
  winAlert.classList.add('no_activeAlert');
})

//! Нажатие клавиш
function key_D(e){
  settingsTime()
  if(str.length != 0 && (e.keyCode == 13 || e.keyCode == 16 || e.keyCode == 32 ||
    (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 64 && e.keyCode < 91) ||
    (e.keyCode > 185 && e.keyCode < 193) || (e.keyCode > 218 && e.keyCode < 223))){
    baseKey.forEach(elem => {
      if(elem.id == e.keyCode){
        elem.classList.add('activeKey')
      } else return
    })
    if(str[0] == e.key && e.key != 'Shift'){
      spN += str[0]
      str.shift()
      audioYes.currentTime = 0;
      audioYes.play();
      textIn.innerHTML = `<span class="painting">${spN}</span>` + str.join('')
    }
    else if(e.key != 'Shift'){
      er_ror++
      err_r.innerHTML = ' Ошибок : ' + er_ror
      audioNo.currentTime = 0;
      audioNo.play()
      show_error();
    }
  } else return
}

function  up_key(e){
  if(e.key == 'Enter' && str.length == 0){
    resetAll()
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

