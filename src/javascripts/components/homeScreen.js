import { makeJoke } from './getJoke';
import image from '../../../jokegenjs.png';

const jokeHome = () => {
  makeJoke();
  document.querySelector('#header').innerHTML = `<img src="${image}" alt="jokegen">`;
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-joke" class="btn">GET A JOKE</button>';
};

export default jokeHome;
