import React from 'react';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.text};
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
        </div>
    );
  }
}


class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleConfirm = this.handleConfirm.bind(this);
    this.state = {
      card: this.props.obj,
      editMode: true
    };
  }

  handleConfirm(e) {


    this.setState({
      card: {
        front: this.refs.front.getText(),
        back: this.refs.back.getText()
      },
      editMode: false
    });

  }

  render() {
    var confirmBtn = (
      <button onClick={this.handleConfirm} 
        className="waves-effect waves-light btn"
        style={{marginLeft: 20}}>
        <i className="material-icons left">cloud</i>
        Confirm
      </button>
    );
    return (
      <div className="card">
        <div className="card-content">
          <InputComponent ref="front" title="Frente" text={this.state.card.front} />
          <span className="card-title  grey-text text-darken-4">
            <button className="waves-effect activator waves-light btn">
              <i className="material-icons left">cloud</i>
              Verso
            </button>
            {this.state.editMode ? confirmBtn : ''}
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Verso<i className="material-icons right">close</i>
          </span>

          <InputComponent ref="back" title="Verso" text={this.state.card.back}/>
        </div>
      </div>
    );
  }
}

CardComponent.defaultProps = {
};

export default CardComponent;