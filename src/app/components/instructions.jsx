let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let FontIcon = mui.FontIcon
let Card = mui.Card
let CardHeader = mui.CardHeader
let CardText = mui.CardText
let RaisedButton = mui.RaisedButton

let CardStore = require('../stores/CardStore.jsx');
let CardActions = require('../actions/CardActions.jsx');

let InstructionsPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange600
    });
  },

  handleStart() {
  	CardActions.fetchCards()
  	this.context.router.transitionTo('/test')

  },

  render() {
    return (
      <Card className="main-card">
        <CardHeader
          title="Do you want to know if you are daltonic?"
          subtitle="Ishihara Test"
        />
        <CardText className="instructions">
          <p>
            The Ishihara Test is the most well known color blindness test all 
            around the world. It consists of 38 so called pseudoisochromatic plates, 
            each of them showing either a number or some lines. According to what you can
             see and what not, the test gives feedback of the degree of your red-green 
             color vision deficiency.
          </p>
          <p>
           This test can only be used to detect red-green color blindness.
          </p>
          <p>
           For each plate you have to either enter the number or you have to choose the number 
           of lines you can see. If you don't see anything just leave the input field empty.
          </p>
          <div className="centered">
			<RaisedButton label="Start Test" primary={true} onClick={this.handleStart}/>
          </div>
        </CardText>
      </Card>
    );
  }

});

module.exports = InstructionsPage
