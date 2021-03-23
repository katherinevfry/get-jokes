import jokeHome from '../components/homeScreen';
import printPunchline from '../components/printPunchline';
import printSetup from '../components/printSetup';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke')) {
      printSetup();
    }
    if (e.target.id.includes('get-punchline')) {
      printPunchline();
    }
    if (e.target.id.includes('new-joke')) {
      jokeHome();
    }
  });
};

export default domEvents;
