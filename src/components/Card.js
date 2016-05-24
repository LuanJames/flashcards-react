import React from 'react';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  getText() {
    return this.state.text;
  }

  render() {
    return (
        <div className="input-field">
          <textarea id="front" type="text" value={this.state.text} onChange={this.onChange} className="materialize-textarea" />
          <label for="front">{this.props.title}</label>
        </div>
    );
  }
}


class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {card: this.props.obj};
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <InputComponent ref="front" title="Frente" />
          <span className="card-title activator grey-text text-darken-4">
            <a className="waves-effect waves-light btn">
              <i className="material-icons left">cloud</i>
              Verso
            </a>
          </span>
        </div>
        <div className="card-reveal">
          <InputComponent ref="back" title="Verso" />
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
