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
          <textarea type="text" value={this.state.text} onChange={this.onChange} className="materialize-textarea" />
        </div>
    );
  }
}


class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleConfirmEdit = this.handleConfirmEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      card: this.props.obj,
      editMode: false
    };
  }

  componentDidMount() { 
   $('.dropdown-btn').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      //  hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );
  }

  handleEdit() {
   this.setState({
      editMode: true
    }); 
  }

  handleDelete() {
    this.props.onDelete(this.state.card.id);
  }

  handleConfirmEdit(e) {
    this.props.onEdit( {
      id: this.state.card.id,
      front: this.refs.front.getText(),
      back: this.refs.back.getText()
    });
    this.setState({editMode: false});
  }

  render() {
    var confirmBtn = (
      <button onClick={this.handleConfirmEdit} 
        className="waves-effect waves-light btn"
        style={{marginLeft: 20}}>
        <i className="material-icons left">cloud</i>
        Confirm
      </button>
    );

    var editBtn = <li><a onClick={this.handleEdit}>Editar</a></li>;

    var frontContent;
    var backContent;
    if (this.state.editMode) {
      frontContent = <InputComponent ref="front" title="Frente" text={this.state.card.front} />;
      backContent  = <InputComponent ref="back" title="Verso" text={this.state.card.back} />;
    } else {
      frontContent = <h5 className="center-align">{this.state.card.front}</h5>;
      backContent  = <h5 className="center-align">{this.state.card.back}</h5>;
    }

    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            Frente<a className="dropdown-btn material-icons right"  data-activates={this.state.card.id}>info</a>
            <ul id={this.state.card.id} className='dropdown-content'>

            { (!this.state.editMode) ? editBtn : '' }
              
              <li><a onClick={this.handleDelete}>Excluir</a></li>
            </ul>
                  
          </span>
          { frontContent }
          <span className="card-title grey-text text-darken-4">
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

          { backContent }
        </div>
      </div>
    );
  }
}

CardComponent.defaultProps = {
};

export default CardComponent;
