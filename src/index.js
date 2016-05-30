import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

main();

function main() {
  persist(alt, storage, 'app');

ReactDOM.render(<App />, document.getElementById('app'));

}
// Render the main component into the dom