const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="nav"></div>
  <div id="header"></div>
  <div id="content-container"></div>
  <div id="button-container"></div>`;
};

export default domBuilder;
