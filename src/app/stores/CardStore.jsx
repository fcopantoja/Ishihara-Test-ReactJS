var Reflux = require('reflux')
var CardActions = require('../actions/CardActions.jsx')

var CardStore = Reflux.createStore({
  listenables: [CardActions],
  state: {
    cards: [],
    currentCard: 0,
    questionState: false,
    questionAnswered: false,
    enableNextButton: true
  },
  
  init: function() {
    this.fetchCards();
  },

  setQuestionState(state) {
    if(state)
        this.state.enableNextButton = false

    this.state.questionState = state
    this.trigger(this.state)
  },

  setCurrentCard(currentCard) {
    this.state.currentCard = currentCard
    this.state.questionAnswered = false
    this.trigger(this.state)
  },
  
  fetchCards: function() {
    console.log('Fetching cards')
    this.state.cards = [
        // 1
        {'right': 12, type: 'number', options: [12, 8, 4]},
        // 2
        {'right': 8, type: 'number', options: [8, 3, 13]},
        // 3
        {'right': 29, type: 'number', options: [12, 8, 4]},
        // 4
        /*{'right': 5, type: 'number'},
        // 5
        {'right': 3, type: 'number'},
        // 6
        {'right': 15, type: 'number'},
        // 7
        {'right': 74, type: 'number'},
        // 8
        {'right': 6, type: 'number'},
        // 9
        {'right': 45, type: 'number'},
        // 10
        {'right': 5, type: 'number'},
        // 11
        {'right': 7, type: 'number'},
        // 12
        {'right': 16, type: 'number'},
        // 13
        {'right': 73, type: 'number'},
        // 14
        {'right': false, type: 'number'},
        // 15
        {'right': false, type: 'number'},
        // 16
        {'right':26, type: 'number'},
        // 17
        {'right':42, type: 'number'},*/
    ]
    this.trigger(this.cards);
  },

  setAnswer(answer) {
    this.state.cards[this.state.currentCard].answer = answer
    this.state.questionAnswered = true
    this.state.enableNextButton = true
    this.trigger(this.state)
  }

});

module.exports = CardStore;


/*cards:[
        // 1
        /*{'right': 12, type: 'number'},
        // 2
        {'right': 8, type: 'number'},
        // 3
        {'right': 29, type: 'number'},
        // 4
        {'right': 5, type: 'number'},
        // 5
        {'right': 3, type: 'number'},
        // 6
        {'right': 15, type: 'number'},
        // 7
        {'right': 74, type: 'number'},
        // 8
        {'right': 6, type: 'number'},
        // 9
        {'right': 45, type: 'number'},
        // 10
        {'right': 5, type: 'number'},
        // 11
        {'right': 7, type: 'number'},
        // 12
        {'right': 16, type: 'number'},
        // 13
        {'right': 73, type: 'number'},
        // 14
        {'right': false, type: 'nothing'},
        // 15
        {'right': false, type: 'nothing'},
        // 16
        {'right':26, type: 'number'},
        // 17
        {'right':42, type: 'number'},
        // 18
        {'right': true, type: 'line'},
        // 19
        {'right': false, type: 'line'},
        // 20
        {'right': true, type: 'line'},
        // 21
        {'right': true, type: 'line'},
        // 22
        {'right': true, type: 'line'},
        // 23
        {'right': true, type: 'line'},
        // 24
        {'right': true, type: 'line'},
        {'right': 12, type: 'number'},
        {'right': 22, type: 'number'},
        {'right': 54, type: 'number'},
      ]*/