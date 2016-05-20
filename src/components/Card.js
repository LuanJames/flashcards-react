import React from 'react';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {card: this.props.obj};
  }

  render() {
    return (
  <div className="card">
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Frente<i className="material-icons right">more_vert</i></span>
      <p><a href="#">Click aki</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Verso<i className="material-icons right">close</i></span>
      <p>Nao sei o que eh</p>
    </div>
  </div>
    );
  }
}

CardComponent.defaultProps = {
  obj: {id: 0, text: 'Frente'}
};

export default CardComponent;
