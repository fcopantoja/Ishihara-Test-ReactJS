let React = require('react');
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
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
let LinearProgress = mui.LinearProgress
let RefreshIndicator = mui.RefreshIndicator

let Reflux = require('reflux')
let CardStore = require('../stores/CardStore.jsx');
let CardActions = require('../actions/CardActions.jsx');
let Options = require('./options.jsx');

let Question = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return CardStore.state
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onStatusChange: function(status) {
    this.setState(status)
    this.forceUpdate()
  },

  componentDidMount: function() {
    CardStore.listen(this.onStatusChange);
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  handleNext() {
    if(this.state.questionState) {
      if(this.state.cards.length == this.state.currentCard + 1)
        this.context.router.transitionTo('results')
      else {
        CardStore.setQuestionState(false)
        CardStore.setCurrentCard(this.state.currentCard + 1)
      }
    } else {
      CardStore.setQuestionState(true)
      if (typeof(this.state.cards[this.state.currentCard].answer) !== 'undefined') {
        CardStore.setEnableNextButton(true)
      } else
        CardStore.setEnableNextButton(false)

      CardStore.setCurrentCard(this.state.currentCard)
    }
  },

   handlePrevious() {
    if(this.state.questionState) {
        CardStore.setQuestionState(false)
        CardStore.setEnableNextButton(true)
    } else {
      CardStore.setQuestionState(true)
      CardStore.setCurrentCard(this.state.currentCard - 1)
      CardStore.setEnableNextButton(true)
    }
  },

  handleOnLoad() {
  },

  render() {

    let buttonStyle = {
      marginRight: '20px'
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

    let backButton = null

    if(!(this.state.currentCard == 0 && this.state.questionState == false))
      backButton = <FloatingActionButton style={{marginRight:'10px'}}
                   iconClassName="fa fa-chevron-left" secondary={true} onClick={this.handlePrevious}/>

    return (
      <Card className="plate">
        <CardHeader className="test-header"
          title={`Plate ${this.state.currentCard + 1}`}
          subtitle="Ishihara"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>

        <div className="test-buttons-container">

          {backButton}
          {this.state.currentCard < 38 && <FloatingActionButton
          iconClassName="fa fa-chevron-right" secondary={true} onClick={this.handleNext}
          disabled={!this.state.enableNextButton}/>}
        </div>

        <div><LinearProgress mode="determinate" value={this.state.currentCard} max={this.state.cards.length}/></div>

        <div className="centered">

          {false && <RefreshIndicator size={80} left={0} top={5} status="loading"
          style={{position:'relative', margin:'0 auto'}} />}

          { !this.state.questionState &&
          <img onLoad={this.handleOnLoad}  key={this.state.currentCard} src={`/img/${this.state.currentCard + 1}-38.png`} style={{minWidth:'300px'}}/>}
          { this.state.questionState &&
          <Options cardData={this.state.cards[this.state.currentCard]}/>}
        </div>
      </Card>
    );
  }

});

module.exports = Question;
