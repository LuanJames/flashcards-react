import React from 'react';

import Card from './Card';

class CardsListComponent extends React.Component {
  constructor(props) {
  	super(props);

    this.updateCard = this.updateCard.bind(this);
  }

  updateCard(id, front, back) {
    this.props.update({id, front, back});
  }

  render() {
    return (
    	<div>
    		{this.props.cards.map((item) => {
          return <Card key={item.id} obj={item} 
            onEdit={this.props.update}
            onDelete={this.props.delete} />
        })}
    	</div>
    );
  }
}

CardsListComponent.defaultProps = {
};

export default CardsListComponent;
