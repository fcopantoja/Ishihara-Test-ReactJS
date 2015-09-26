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
let RadioButtonGroup = mui.RadioButtonGroup
let RadioButton = mui.RadioButton


let CardStore = require('../stores/CardStore.jsx');
let CardActions = require('../actions/CardActions.jsx');

let OptionsPage = React.createClass({
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

  handleChange(event, selected) {
    CardActions.setAnswer(selected)
  },

  render() {
    return (
      <CardText>
          <h3>
            What did you see?
          </h3>
          <p>
            <RadioButtonGroup name="shipSpeed" onChange={this.handleChange} ref="radioGroup">
                <RadioButton
                  value={String(this.props.options[0])}
                  label={String(this.props.options[0])}
                  style={{marginBottom:16}} />
                <RadioButton
                  value={String(this.props.options[1])}
                  label={String(this.props.options[1])}
                  style={{marginBottom:16}}/>
                <RadioButton
                  value={String(this.props.options[2])}
                  label={String(this.props.options[2])}
                  style={{marginBottom:16}}/>
                </RadioButtonGroup>
          </p>
        </CardText>
    );
  }

});

module.exports = OptionsPage
