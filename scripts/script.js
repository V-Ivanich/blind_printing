
const allBtn = document.querySelectorAll('.key_1')
let textIn = document.querySelector('.in_text'),
textOut = document.querySelector('.out_text'),
sound = new Audio()
audio.src="ringout.wav"


let baseKey = Array.from(allBtn)
let spN = ''
let str = textIn.innerText.split('')


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
    audio.autoplay = true;
    return
  }
}

function  up_key(e){
  let x = String(e.keyCode)
  baseKey.forEach(elem => {
    if(elem.id == x){
      elem.classList.remove('activeKey')
    }
  })

}
addEventListener('keyup', up_key);

addEventListener('keydown', key_D);

