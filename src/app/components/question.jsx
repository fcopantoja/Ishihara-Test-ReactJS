let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let Paper = mui.Paper;
let RaisedButton = mui.RaisedButton;

let ReactRouter = require('react-router')
let Router = ReactRouter.Router
let Route = ReactRouter.Route
let FloatingActionButton = mui.FloatingActionButton

let Card = mui.Card
let CardHeader = mui.CardHeader
let CardMedia = mui.CardMedia
let CardTitle = mui.CardTitle
let Avatar = mui.Avatar
let CardText = mui.CardText
let FontIcon = mui.FontIcon
let TextField = mui.TextField
let RadioButton = mui.RadioButton
let RadioButtonGroup = mui.RadioButtonGroup

let CardStore = require('../stores/CardStore.jsx');
let CardActions = require('../actions/CardActions.jsx');

let Question = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      currentCard: 0,
      cards: CardStore.cards
    };
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

  handleNext() {
    let state = this.state

    if(this.validateInput()) {
      console.log('validate input')
      
      if(state.currentCard == (state.cards.length - 1)) {
        this.context.router.transitionTo('/results')
      }

      else {
        console.log('here i am')   
        CardActions.setAnswer(state.currentCard,  this.refs.textField.getValue())
        state.currentCard = state.currentCard + 1
        this.setState(state)
      }
    }     
  },

   handlePrevious() {
    let state = this.state
    state.currentCard = state.currentCard
    this.setState(state)
    //this.setCardAnswer()
  },

  setCardAnswer() {

    let card = this.state.cards[this.state.currentCard ]

    if(card.type == 'number') {
      if( typeof (card.answer) !== 'undefined' )
        this.refs.textField.setValue(card.answer)
      else
        this.refs.textField.setValue(null)

      this.refs.textField.focus()
    }

    if(card.type == 'nothing') {
      if( typeof (card.answer) !== 'undefined' )
        this.refs.radioField.setValue(card.answer)
      else
        this.refs.radioField.setValue(null)

      this.refs.radioField.focus()
    }

  },

  handleChange(evt) {    
    let state = this.state
    state.cards[state.currentCard].answer = evt.target.value
    this.setState(state)
  },

  validateInput() {
    let textInput = this.refs.textField
    let radioInput = this.refs.radioField

    if(textInput) {
      let value = textInput.getValue()

      if (value === '') {
        textInput.setErrorText('Enter a number')
        return false
      }

      if (isNaN(value) || value === '') {
        textInput.setErrorText('This field must be numeric')
        return false
      }

      return true
    }

    if(radioInput) {
      let value = radioInput.getSelectedValue()
      
      if (value === '')
        return false

      return true
    }

  },

  render() {

    let styles = {
      position: 'relative',
      textAlign: 'center',
      padding: '30px 0'
    }

    let buttonStyle = {
      marginRight: '20px'
    }

    let cardStyle = {
      width: '80%',
      margin: '0 auto',
      marginTop: '40px',
      
    }

    let centeredStyle = {
      textAlign: 'center'
    }

    let buttonsCard = {
      width: '80%',
      margin: '0 auto',
      marginBottom: '40px',
    }

    let buttonContainer = {
      textAlign: 'center',
    }

    let formStyle = {
      marginBottom: '30px',
    }

    let formStyle2 = {
      width: '300px',
      margin:'0 auto'
    }

    let radioStyle = {
      width: '100px',
      margin:'0 auto'
    }

    return (
      <div>
      <Card style={cardStyle}>
        <CardHeader
          title={`Card ${this.state.currentCard + 1}`}
          subtitle="Ishihara Color Vision Test"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>
        <div style={centeredStyle}>
          <img src={`/img/card${this.state.currentCard + 1}.png`} />
        </div>
      </Card>
      <Card style={buttonsCard}>
        <CardText>
          <div style={buttonContainer}>             
            <div style={formStyle}>
              <div style={formStyle2}>
              {this.state.cards[this.state.currentCard].type == 'number' &&
              <TextField hintText="What number do you see?" 
              onChange={this.handleChange} ref="textField" onEnterKeyDown={this.handleNext}/>}

              {this.state.cards[this.state.currentCard].type == 'nothing' &&
              <div>
                <h2>Can you see any number?</h2>
                <RadioButtonGroup name="yesno" style={radioStyle}  ref="radioField" onChange={this.handleChange}>
                  <RadioButton value="yes" label="Yes" labelStyle={{color:'rgba(0, 0, 0, 0.54)', fontSize:'18px'}}/>
                  <RadioButton value="no" label="No" labelStyle={{color:'rgba(0, 0, 0, 0.54)', fontSize:'18px'}}/>
                </RadioButtonGroup>
              </div>
              }

              {this.state.cards[this.state.currentCard].type == 'line' &&
              <div>
                <h2>Can you see a line?</h2>
                <RadioButtonGroup name="yesno" style={radioStyle}  ref="radioField" onChange={this.handleChange}>
                  <RadioButton value="yes" label="Yes" labelStyle={{color:'rgba(0, 0, 0, 0.54)', fontSize:'18px'}}/>
                  <RadioButton value="no" label="No" labelStyle={{color:'rgba(0, 0, 0, 0.54)', fontSize:'18px'}}/>
                </RadioButtonGroup>
              </div>
              }

              </div>

            </div>
            {this.state.currentCard > 1 && <FloatingActionButton style={buttonStyle}
            iconClassName="fa fa-chevron-left" secondary={true} onClick={this.handlePrevious}/> }            
            {this.state.currentCard < 24 && <FloatingActionButton style={buttonStyle}
            iconClassName="fa fa-chevron-right" secondary={true} onClick={this.handleNext}/>}             
          </div>
        </CardText>
      </Card>
      </div>
    );
  }

});

module.exports = Question;
