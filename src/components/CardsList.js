import React from 'react';

import Card from './Card';

class CardsListComponent extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	var item = function (item) {
  		return <Card key={item.id} obj={item} />
  	}
    return (
    	<div>
    		{this.props.cards.map(item)}
    	</div>
    );
  }
}

CardsListComponent.defaultProps = {
};

export default CardsListComponent;
