import {basEngl} from "../modules/base.js";
import { beginWords } from "../modules/beginer.js";
import { replAce } from "../modules/replac_Ment.js";
import { shiftBtn } from "../modules/btnShift.js"

const allBtn = document.querySelectorAll('.key_1'),
  level = document.querySelectorAll('.diff_level') //? кнопки уровня сложности
let textIn = document.querySelector('.in_text'),
textIn2 = document.querySelector('.in_text1'),
textIn3 = document.querySelector('.in_text2'),
btnInfo = document.querySelector('#btn_spr'),
errorText = document.querySelector('.err_or'),
winAlert = document.querySelector('#alert_s'),
shiftKey = document.querySelectorAll('.keyShift'),
visual_err = document.querySelector('.visual'),
winResult = document.querySelector('#btnResult'),
windowResult = document.querySelector('#windowResult'),
lab_result = document.querySelector('.result')

let audioYes = new Audio('./audio/yes.mp3')
let audioNo =new Audio('./audio/no.mp3')
let audioTada = new Audio('./audio/tada.mp3')

const btn_lag = document.querySelectorAll('.language'), //? выбор языка
  btn_restartt = document.querySelector('#res_btn')


let baseKey = Array.from(allBtn), //! кнопки на виртуалке
spN = '',
str =[],
arrTemp = [],
start,
er_ror = 0,
lineBlock = 0, //? количество строк в визуальном блоке
arrLine = [textIn, textIn2, textIn3], //? массив параграфов
lengStr = 0,
baseFlag = '0',
langFlag = false,
active_dictionary = beginWords.words,
endTime,
mySetLevels = '1',
upBtn = shiftBtn.unShift_us,
downBtn = shiftBtn.us_shift
let tempStr,
  numberLine = 0

const resultTable = { //! Таблица результатов за сеанс
  'level' : 1,
  'language' : 'us',
  'timeSimbol' : 0,
  'errorsPerSession' : 0
}
const generalTable = [] //! Общая таблица

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function resetAll(){ //? перезапуск
  textIn.innerText = ''
  textIn2.innerText = ''
  textIn3.innerText = ''
  lab_result.innerText = ''
  numberLine = 0
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

      resultTable.language = 'us' //* to the table

    } else {
      upBtn = shiftBtn.unShift_ru
      downBtn = shiftBtn.ru_shift
      langFlag = true

      resultTable.language = 'ru' //* to the table

    }
    languageSwitching(upBtn)
    levelUp()
  })
})

//! Подключение библиотек в зависимости от уровня
function levelUp() {
  if( mySetLevels === '1'){
    active_dictionary = langFlag ? beginWords.wordsRus : beginWords.words
    baseFlag = beginWords.flag
  }
  else {
    active_dictionary = langFlag ? basEngl.wordsRus : basEngl.words
    baseFlag = basEngl.flag
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
    mySetLevels = e.target.dataset.levels
    levelUp()
  })
})

//? получение строки
function getSrings(min, max){
  return getRndInteger(min, max)
}

//! функция создания и отрисовки строки
function printOutRandom(){
  let temp = getSrings(0, active_dictionary.length - 1)
  lineBlock = 0
  switch(baseFlag){
    case '1':
      arrLine[0].innerText = active_dictionary[temp]
      tempStr = active_dictionary[temp]

      resultTable.level = 2 //* to the table

      if( mySetLevels === '3'){ //? формиромание еще двух строк
        temp = getSrings(0, active_dictionary.length - 1)
        arrLine[1].innerText = active_dictionary[temp]
        tempStr += active_dictionary[temp]

        temp = getSrings(0, active_dictionary.length - 1)
        arrLine[2].innerText = active_dictionary[temp]
        tempStr += active_dictionary[temp]

        lineBlock = 2

        resultTable.level = 3 //* to the table
      }
    break
    case '0':
      tempStr = active_dictionary[temp]
      const dublicate = tempStr
      while(tempStr.length < 56){
        let prom = tempStr.length + dublicate.length + 1
        if(prom > 56) break
        else tempStr += ' ' + dublicate
      }
    arrLine[0].innerText = tempStr

    resultTable.level = 1 //* to the table
    break
  }

  str = tempStr.split('') //? массив из строки
  arrTemp = str.slice(0,56) //? вспомагательный массив
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
    start = new Date().getTime()
  }
  if(str.length == 1) {
    endTime = new Date().getTime() //? 'конец' таймера
    let temp = parseInt(3000/((endTime - start)/1000))
    lab_result.innerHTML = ' ' + temp + ' сим. в мин.'
    errorText.innerHTML = ' Ошибок : ' + er_ror
    audioTada.currentTime = 0
    audioTada.play()

    resultTable.timeSimbol = temp //* to the table
    resultTable.errorsPerSession = er_ror //* to the table
    generalTable.push({...resultTable})
    localStorage.setItem('resultSpeedTest', JSON.stringify(generalTable)) //!запись в "браузер"
  }
}


function spanColor(){ //? фу-я выделения символов
  arrLine[numberLine].innerHTML = `<span class="painting">${spN}</span>` + arrTemp.join('')
  if(lineBlock){
    if(arrTemp.length === 0){
      spN = ''
      --lineBlock
      ++numberLine
      arrTemp = str.slice(0,56)
    }
  }
}


btn_restartt.addEventListener('click', () => {
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

winResult.addEventListener('click', () => {
  windowResult.classList.remove('no_activeAlert');
})

windowResult.addEventListener('click', () => {
  windowResult.classList.add('no_activeAlert');
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
      spN += arrTemp.shift()
      str.shift()
      audioYes.currentTime = 0;
      audioYes.play();
      spanColor()
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

