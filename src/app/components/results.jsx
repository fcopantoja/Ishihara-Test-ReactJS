let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Paper = mui.Paper
let Avatar = mui.Avatar
let FontIcon = mui.FontIcon
let List = mui.List
let ListItem = mui.ListItem
let rightIconMenu = mui.rightIconMenu
let ListDivider = mui.ListDivider

let Reflux = require('reflux')
let CardStore = require('../stores/CardStore.jsx');
let CardActions = require('../actions/CardActions.jsx');

let Results = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      height: '400px',
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

  render() {

    let cardStyle = {
      width: '90%',
      margin: '0 auto',
      marginTop: '40px',
      marginBottom: '40px'
      
    }

    let rightAnswers = 0
    let listItems = CardStore.state.cards.map(function(card, index) {
      
      let avatar = <Avatar icon={<FontIcon className="fa fa-check" />} backgroundColor='#00bcd4'/>

      if (card.answer != card.right) 
        avatar = <Avatar icon={<FontIcon className="fa fa-times" />}/>
      else
        rightAnswers += 1

      return (
        <div>
        <div>{CardStore.cardlist}</div>
          <ListItem
            leftAvatar={avatar}
            rightIconButton={rightIconMenu}
            primaryText={`Card ${index + 1}`}
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>
                  Right Answer: {card.right}, Your Answer: {card.answer}
                </span>
                <br/>
                Type: {card.type}
              </p>
            }
            secondaryTextLines={2} />
          <ListDivider inset={true} />
        </div>
      )
    })

    let score = rightAnswers * 100 / CardStore.state.cards.length
    console.log(score)

    let blindnessColor = {
      'none': Colors.green200,
      'weak': Colors.yellow600,
      'moderate': Colors.red400,
      'strong': Colors.red800
    }

    let msg, scoreColor

    if (score < 30) {
      msg = 'You have a strong color blindness'
      scoreColor = blindnessColor.strong
    
    } else if (score >= 30 && score < 50) {
      msg = 'You have a moderate color blindness'
      scoreColor = blindnessColor.moderate
    
    }  else if (score >= 50 && score < 80) {
      msg = 'You have a weak color blindness'
      scoreColor = blindnessColor.weak
    
    } else {
      msg = 'You dont have color blindness'
      scoreColor = blindnessColor.none
    }

    //let avatar = <Avatar icon={<FontIcon className="fa fa-check" />} backgroundColor='#00bcd4'/>
    let avatar = <Avatar icon={<FontIcon className="fa fa-check" />} backgroundColor={scoreColor}/>

    return (
      <div>
      <Paper style={cardStyle} zDepth={2}>
        <List subheader="">
          <ListItem leftAvatar={avatar} rightIconButton={rightIconMenu}
            primaryText={`${rightAnswers} of ${CardStore.state.cards.length} Right Answers`}
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>
                  {msg}
                </span>
                <br/>
              </p>
            }
            secondaryTextLines={2} />
        </List>
      </Paper>

      <Paper style={cardStyle} zDepth={2}>
        <List subheader="Your Results">
          {listItems}
        </List>
      </Paper>
      </div>
    
    );
  }

});

module.exports = Results;
