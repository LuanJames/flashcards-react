require('normalize.css/normalize.css');
require('materialize-css/dist/css/materialize.min.css');
require('materialize-css/dist/js/materialize.min.js');
require('styles/App.css');

import React from 'react';

import Navbar from './Navbar'
import CardsList from './CardsList'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
      	<Navbar />
          <CardsList />
          <div className="fixed-action-btn" style={{bottom: '45px', right: '24px'}}>
          	<a  className="btn-floating btn-large blue">
          		<i className="material-icons">add</i>
          	</a>
          </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;