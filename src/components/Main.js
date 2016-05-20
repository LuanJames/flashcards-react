require('normalize.css/normalize.css');
require('materialize-css/dist/css/materialize.min.css');

var $ = window.jQuery = require('jquery');

require('materialize-css/dist/js/materialize.min.js');
require('styles/App.css');

import React from 'react';
import Navbar from './Navbar'
import CardsList from './CardsList'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  teste() {
    var card = {id: this.state.cards.length+1};
    this.state.cards.push(card);
    this.setState({cards: this.state.cards});
  }

  render() {
    return (
      <div>
      	<Navbar />
          <CardsList cards={this.state.cards}/>

          <div className="fixed-action-btn" style={{bottom: '45px', right: '24px'}}>
          	<a  onClick={() => this.teste()} className="btn-floating btn-large blue">
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