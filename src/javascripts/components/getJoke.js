import getJoke from '../helpers/data/jokeData';

let joke = {};

const makeJoke = () => {
  getJoke().then((response) => {
    joke = response;
  });
};

const showSetup = () => {
  const getFirst = joke.setup;
  return getFirst.toUpperCase();
};

const showPunchline = () => {
  const getSecond = joke.punchline;
  return getSecond.toUpperCase();
};

export {
  makeJoke,
  showSetup,
  showPunchline,
};
