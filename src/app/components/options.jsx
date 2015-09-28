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

    let labelStyle = {
        fontSize:'32px',
        color: '#ccc'
    }

    let question = 'What did you see?'

    if (this.props.cardData.type === 'line')
      question = 'Can you see any line? How many?'

    return (
      <CardText>
          <div style={{width:'150px', margin:'0 auto'}}>
          <h3 style={{color:'#555'}}>{question}</h3>

            <RadioButtonGroup name="shipSpeed" onChange={this.handleChange} ref="radioGroup"
            defaultSelected={String(this.props.cardData.answer)}>
                <RadioButton
                  value={String(this.props.cardData.options[0])}
                  label={String(this.props.cardData.options[0])}
                  labelStyle={labelStyle}
                  style={{marginBottom:16}} />
                <RadioButton
                  value={String(this.props.cardData.options[1])}
                  label={String(this.props.cardData.options[1])}
                  labelStyle={labelStyle}
                  style={{marginBottom:16}}/>
                <RadioButton
                  value={String(this.props.cardData.options[2])}
                  label={String(this.props.cardData.options[2])}
                  labelStyle={labelStyle}
                  style={{marginBottom:16}}/>
                </RadioButtonGroup>
          </div>
        </CardText>
    );
  }

});

module.exports = OptionsPage
