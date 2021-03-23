import jokeHome from './components/homeScreen';
import domEvents from './events/domEvents';
import domBuilder from './helpers/views/jokesDomBuilder';

const startApp = () => {
  domBuilder();
  domEvents();
  jokeHome();
};

export default startApp;
