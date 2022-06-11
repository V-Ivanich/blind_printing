
const allBtn = document.querySelectorAll('.key_1')
let textT = document.querySelector('.test_text')

let baseKey = Array.from(allBtn)
console.log(textT)
let spN = ''
let str = textT.innerText.split('')

function key_D(e){
  let x = String(e.keyCode)
  spN += str[0]
  str.shift()
  textT.innerHTML = `<span class="painting">${spN}</span>` + str.join('')
  console.log(textT)
  baseKey.forEach(elem => {
    if(elem.id == x){
      elem.classList.add('activeKey')
    }
  })
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

