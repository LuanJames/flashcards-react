import uuid from 'node-uuid';
import alt from '../libs/alt';
import CardActions from '../actions/CardActions';

class CardStore {
  constructor() {
    this.bindActions(CardActions);

    this.cards = [{id: uuid.v4(),
      front: 'Escreva a frente do cartão aqui',
      back: 'Escreva o verso do cartão aqui.'
    }];
  }

  create(card) {
    const cards = this.cards;

    card.id = uuid.v4();

    this.setState({cards: cards.concat(card)});

  }

  update({id, front, back}) {
    console.log(id);
    console.log(front);
    console.log(back);

    const cards = this.cards.map((card) => {
      if (card.id === id) {
        card.front = front;
        card.back = back;
      }

      return card;
    });

    this.setState({cards});

  }

  delete(id) {
    this.setState({
      cards: this.cards.filter((card) => card.id !== id)
    });
  }
}

export default alt.createStore(CardStore, 'CardStore');
