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

let Question = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      currentCard: 1,
      cards:[
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
        {'right': true, type: 'line'},*/
        {'right': 12, type: 'number'},
        {'right': 'no', type: 'nothing'},
        {'right': 'yes', type: 'line'},
      ]
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

    console.log(this.state.cards)

    if(this.validateInput()) {
      let state = this.state
      state.currentCard = state.currentCard + 1
      this.setState(state)
      this.setCardAnswer()
      
    }
  },

   handlePrevious() {
    let state = this.state
    state.currentCard = state.currentCard - 1
    this.setState(state)
    this.setCardAnswer()
  },

  setCardAnswer() {

    let card = this.state.cards[this.state.currentCard - 1]

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
    state.cards[state.currentCard - 1].answer = evt.target.value
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
          title={`Card ${this.state.currentCard}`}
          subtitle="Ishihara Color Vision Test"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>
        <div style={centeredStyle}>
          <img src={`/img/card${this.state.currentCard}.png`} />
        </div>
      </Card>
      <Card style={buttonsCard}>
        <CardText>
          <div style={buttonContainer}>             
            <div style={formStyle}>
              <div style={formStyle2}>
              {this.state.cards[this.state.currentCard - 1].type == 'number' &&
              <TextField hintText="What number do you see?" 
              onChange={this.handleChange} ref="textField" onEnterKeyDown={this.handleNext}/>}

              {this.state.cards[this.state.currentCard - 1].type == 'nothing' &&
              <div>
                <h2>Can you see any number?</h2>
                <RadioButtonGroup name="yesno" style={radioStyle}  ref="radioField" onChange={this.handleChange}>
                  <RadioButton value="yes" label="Yes" labelStyle={{color:'rgba(0, 0, 0, 0.54)', fontSize:'18px'}}/>
                  <RadioButton value="no" label="No" labelStyle={{color:'rgba(0, 0, 0, 0.54)', fontSize:'18px'}}/>
                </RadioButtonGroup>
              </div>
              }

              {this.state.cards[this.state.currentCard - 1].type == 'line' &&
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
