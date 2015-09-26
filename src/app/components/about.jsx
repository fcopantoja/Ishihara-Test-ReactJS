let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Paper = mui.Paper
let Avatar = mui.Avatar
let FontIcon = mui.FontIcon
let Card = mui.Card
let CardHeader = mui.CardHeader
let CardText = mui.CardText

let CardStore = require('../stores/CardStore.jsx');
let CardActions = require('../actions/CardActions.jsx');

let AboutPage = React.createClass({
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
      accent1Color: Colors.deepOrange500
    });
  },

  render() {
    return (
      <Card className="main-card">
        <CardHeader
          title="Ishihara Test"
          subtitle="What is it?"
        />
        <CardText>
          <p>
            The Ishihara test is a color perception test for red-green color deficiencies. It was named after
            its designer, Dr. Shinobu Ishihara, a professor at the University of Tokyo, who first published his
            tests in 1917
          </p>
          <p>
            The test consists of a number of colored plates, called Ishihara plates, each of which contains a circle
            of dots appearing randomized in color and size. Within the pattern are dots which form a number or
            shape clearly visible to those with normal color vision, and invisible, or difficult to see, to those
            with a red-green color vision defect, or the other way around. The full test consists of 38 plates,
            but the existence of a deficiency is usually clear after a few plates. There is also the smaller test
            consisting only 24 plates
          </p>
        </CardText>
      </Card>
    );
  }

});

module.exports = AboutPage
