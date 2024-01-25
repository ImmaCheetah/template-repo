import './style.css';

const text = document.createElement('p');
const div = document.querySelector('.container');

text.textContent = 'Testing';
text.classList.add('hello');
div.appendChild(text);

