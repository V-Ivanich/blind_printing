import {basEngl} from "../modules/base.js";
import { beginWords } from "../modules/beginer.js";
import { replAce } from "../modules/replac_Ment.js";
import { shiftBtn } from "../modules/btnShift.js"

const allBtn = document.querySelectorAll('.key_1'),
  level = document.querySelectorAll('.diff_level') //? кнопки уровня сложности
let textIn = document.querySelector('.in_text'),
btnInfo = document.querySelector('#btn_spr'),
errorText = document.querySelector('.err_or'),
winAlert = document.querySelector('#alert_s'),
shiftKey = document.querySelectorAll('.keyShift'),
visual_err = document.querySelector('.visual'),
lab_result = document.querySelector('.result')

let audioYes = new Audio('./audio/yes.mp3')
let audioNo =new Audio('./audio/no.mp3')
let audioTada = new Audio('./audio/tada.mp3')

const btn_lag = document.querySelectorAll('.language'), //? выбор языка
  btn_restart = document.querySelector('#res_btn')


let baseKey = Array.from(allBtn), //! кнопки на виртуалке
spN = '',
str =[],
star,
er_ror = 0,
lengStr = 0,
langFlag = false,
active_dictionary = beginWords.words,
endTime,
upBtn = shiftBtn.unShift_us,
downBtn = shiftBtn.us_shift


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function resetAll(){ //? перезапуск
  textIn.innerText = ''
  lab_result.innerText = ''
  spN = ''
  er_ror = 0
  errorText. innerHTML = 'Ошибок : 0'
}

//! выбор языка
btn_lag.forEach(item => {
  item.addEventListener('click', (e) => {
    btn_lag.forEach(elem => {
      elem.classList.remove('active')
    })
    e.target.classList.add('active')
    if( e.target.dataset.lang == 'us'){
      upBtn = shiftBtn.unShift_us
      downBtn = shiftBtn.us_shift
      langFlag = false
    } else {
      upBtn = shiftBtn.unShift_ru
      downBtn = shiftBtn.ru_shift
      langFlag = true
    }
    languageSwitching(upBtn)
    levelUp()
  })
})

//! Подключение библиотек в зависимости от уровня
function levelUp() {
  let temp = document.querySelector('.dropdown-item.diff_level.active')
  if( temp.dataset.level == 1){
    active_dictionary = langFlag ? beginWords.wordsRus : beginWords.words
  }
  else {
    active_dictionary = langFlag ? basEngl.wordsRus : basEngl.words
  }
  resetAll()
  printOutRandom()
}

//! кнопки выбора уровня сложности
level.forEach(item => {
  item.addEventListener('click', (e) => {
    level.forEach(elem => {
      elem.classList.remove('active')
    })
    e.target.classList.add('active')
    levelUp()
  })
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
    lab_result.innerHTML = ' ' + temp + ' сим. в мин.'
    errorText.innerHTML = ' Ошибок : ' + er_ror
    audioTada.currentTime = 0
    audioTada.play()
  }
}

btn_restart.addEventListener('click', () => {
  resetAll();
  printOutRandom();
  document.querySelector('.result').innerHTML = ''
  errorText.innerHTML = ' Ошибок : ' + er_ror;
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
  let checkKey
  settingsTime()
  if(str.length != 0 && (e.keyCode == 13 || e.keyCode == 16 || e.keyCode == 32 ||
    (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 64 && e.keyCode < 91) ||
    (e.keyCode > 185 && e.keyCode < 193) || (e.keyCode > 218 && e.keyCode < 223))){
    baseKey.forEach(elem => {
      if(elem.id == e.keyCode){
        elem.classList.add('activeKey')
      } else return
    })
//! замена латиницы на кирилицу
    if(langFlag){
      checkKey = replAce[e.key]
    } else checkKey = e.key

    if(str[0] == checkKey && e.key != 'Shift'){
      spN += str[0]
      str.shift()
      audioYes.currentTime = 0;
      audioYes.play();
      textIn.innerHTML = `<span class="painting">${spN}</span>` + str.join('')
    }
    else if(e.key == 'Shift'){
      languageSwitching(downBtn)
    } else {
      er_ror++
      errorText.innerHTML = ' Ошибок : ' + er_ror
      audioNo.currentTime = 0;
      audioNo.play()
      show_error();
    }
  } else return
}

function languageSwitching(attrb){
  shiftKey.forEach((item, index )=> {
    item.innerText = attrb[index]
  })
}

function  up_key(e){
  if(e.key == 'Shift'){
    languageSwitching(upBtn)
  }
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

