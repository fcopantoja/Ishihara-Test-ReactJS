var Reflux = require('reflux');

var CardActions = Reflux.createActions([
  'fetchList',
  'fetchCards',
  'setAnswer',
  'setQuestionState',
  'setCurrentCard',
  'setEnableNextButton',
  'setLoadingCard',
  'getCorrectAnswers',
]);

module.exports = CardActions;