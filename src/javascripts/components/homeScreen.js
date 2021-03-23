import { makeJoke } from './getJoke';

const jokeHome = () => {
  makeJoke();
  document.querySelector('#header').innerHTML = '<img src="https://imgur.com/mY4YEKS" alt="jokegen">';
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-joke" class="btn">GET A JOKE</button>';
};

export default jokeHome;
