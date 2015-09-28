var Reflux = require('reflux')
var CardActions = require('../actions/CardActions.jsx')

var CardStore = Reflux.createStore({
  listenables: [CardActions],
  state: {
    cards: [],
    currentCard: 0,
    questionState: false,
    questionAnswered: false,
    enableNextButton: true,
    loadingCard: false
  },
  
  init: function() {
    this.fetchCards();
  },

  setEnableNextButton(enabled) {
    this.state.enableNextButton = enabled
    this.trigger(this.state)
  },

  setQuestionState(state) {
    this.state.questionState = state
    this.trigger(this.state)
  },

  setCurrentCard(currentCard) {
    this.state.currentCard = currentCard
    this.state.questionAnswered = false
    this.trigger(this.state)
  },

  setLoadingCard(state) {
    this.state.loadingCard = state
    this.trigger(this.state)
  },
  
  fetchCards: function() {
    this.state.cards = [
        {plate: 1, 'right': 12, type: 'number', options: [12, 8, 4]},
        {plate: 2, 'right': 8, type: 'number', options: [8, 3, 13]},
        {plate: 3, 'right': 6, type: 'number', options: [6, 8, 4]},
        {plate: 4, 'right': 29, type: 'number', options: [29, 8, 4]},
        {plate: 5, 'right': 57, type: 'number', options: [57, 8, 4]},
        {plate: 6, 'right': 5, type: 'number', options: [5, 8, 4]},
        {plate: 7, 'right': 3, type: 'number', options: [3, 8, 4]},
        {plate: 8, 'right': 15, type: 'number', options: [15, 8, 4]},
        {plate: 9, 'right': 74, type: 'number', options: [74, 8, 4]},
        {plate: 10, 'right': 2, type: 'number', options: [2, 8, 4]},
        {plate: 11, 'right': 6, type: 'number', options: [6, 8, 4]},
        {plate: 12, 'right': 97, type: 'number', options: [97, 8, 4]},
        {plate: 13, 'right': 45, type: 'number', options: [45, 8, 4]},
        {plate: 14, 'right': 5, type: 'number', options: [5, 8, 4]},
        {plate: 15, 'right': 7, type: 'number', options: [7, 8, 4]},
        {plate: 16, 'right': 16, type: 'number', options: [16, 8, 4]},
        {plate: 17, 'right': 73, type: 'number', options: [73, 8, 4]},
        {plate: 18, 'right': 'Anything', type: 'number', options: ['Anything', 8, 4]},
        {plate: 19, 'right': 'Anything', type: 'number', options: ['Anything', 8, 4]},
        {plate: 20, 'right': 'Anything', type: 'number', options: ['Anything', 8, 4]},
        {plate: 21, 'right': 'Anything', type: 'number', options: ['Anything', 8, 4]},
        {plate: 22, 'right': 26, type: 'number', options: [26, 8, 4]},
        {plate: 23, 'right':42, type: 'number', options: [42, 8, 4]},
        {plate: 24, 'right':35, type: 'number', options: [35, 8, 4]},
        {plate: 25, 'right': 96, type: 'number', options: [96, 8, 4]},
        {plate: 26, 'right': 2, type: 'line', options: [0, 1, 2]},
        {plate: 27, 'right': 2, type: 'line', options: [0, 1, 2]},
        {plate: 28, 'right': 0, type: 'line', options: [0, 1, 2]},
        {plate: 29, 'right': 0, type: 'line', options: [0, 1, 2]},
        {plate: 30, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 31, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 32, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 33, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 34, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 35, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 36, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 37, 'right': 1, type: 'line', options: [0, 1, 2]},
        {plate: 38, 'right': 1, type: 'line', options: [0, 1, 2]},
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