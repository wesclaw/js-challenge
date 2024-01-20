const form = document.getElementById('form');
const inputTwo = document.getElementById('inputTwo');
const inputOne = document.getElementById('inputOne');
const wrapper = document.querySelector('.wrapper');

function colorBoxes(box_el, index) {
  const getInputOneValue = inputOne.value;

  if (index < getInputOneValue) {
    box_el.style.backgroundColor = 'red';
  }  
}


function displayBoxes(e) {
  e.preventDefault();
  
  const getInputTwoValue = inputTwo.value;
  
  wrapper.innerHTML = '';

  for (let i = 0; i < getInputTwoValue; i++) {
    const box_el = document.createElement('div');
    box_el.classList.add('box'); 

    wrapper.appendChild(box_el);

    colorBoxes(box_el, i)

  }
  
}

form.addEventListener('submit', displayBoxes);
