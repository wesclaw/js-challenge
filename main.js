const inputOne = document.getElementById('inputOne')
const inputTwo = document.getElementById('inputTwo')
const wrapper = document.querySelector('.wrapper')


console.log(inputOne)
console.log(inputTwo)
console.log(wrapper)

inputTwo.addEventListener('keyup', e=>{
  console.log(inputTwo.value)
})