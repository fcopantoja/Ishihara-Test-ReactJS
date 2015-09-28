var Reflux = require('reflux');

var CardActions = Reflux.createActions([
  'fetchList',
  'setAnswer',
  'setQuestionState',
  'setCurrentCard',
  'setEnableNextButton',
  'setLoadingCard',
  'getCorrectAnswers',
]);

module.exports = CardActions;