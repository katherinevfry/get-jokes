import { showPunchline } from './getJoke';

const printPunchline = () => {
  document.querySelector('#content-container').innerHTML = `
    <h1 id="setup-joke">${showPunchline()}</h1>`;
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="new-joke" class="btn">GET NEW JOKE</button>';
};

export default printPunchline;
