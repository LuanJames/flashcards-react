require('normalize.css/normalize.css');
require('materialize-css/dist/css/materialize.min.css');

var $ = window.jQuery = require('jquery');

require('materialize-css/dist/js/materialize.min.js');
require('styles/App.css');

import React from 'react';
import AltContainer from 'alt-container';
import Navbar from './Navbar';
import CardsList from './CardsList';
import CardActions from '../actions/CardActions';
import CardStore from '../stores/CardStore';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  addCard() {
    CardActions.create({
      front: 'Escreva a frente do cartão aqui',
      back: 'Escreva o verso do cartão aqui.'
    });

  }

  render() {
    return (
      <div>
      	<Navbar />
          <AltContainer
            store={CardStore}
            actions={CardActions} >
              <CardsList />
          </AltContainer>

          <div className="fixed-action-btn" style={{bottom: '45px', right: '24px'}}>
          	<a  onClick={() => this.addCard()} className="btn-floating btn-large blue">
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