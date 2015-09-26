var Reflux = require('reflux');

var CardActions = Reflux.createActions([
  'fetchList',
  'setAnswer',
  'setQuestionState',
  'setCurrentCard',
]);

module.exports = CardActions;