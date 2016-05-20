import React from 'react';

import Card from './Card';

class CardsListComponent extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {cards: this.props.cards};
  }

  render() {
  	var item = function (item) {
  		return <Card key={item.id} obj={item} />
  	}
    return (
    	<div>
    		{this.state.cards.map(item)}
    	</div>
    );
  }
}

CardsListComponent.defaultProps = {
	cards: [{text: 'primeiro'}]
};

export default CardsListComponent;
