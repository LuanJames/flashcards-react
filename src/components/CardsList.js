import React from 'react';

class CardsListComponent extends React.Component {
  
  render() {
    return (
    	<div>
    		sd {this.props.cards.size} ee
    	</div>
    );
  }
}

CardsListComponent.defaultProps = {
};

export default CardsListComponent;
