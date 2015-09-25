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
      
    }

    let listItems = CardStore.cards.map(function(card, index) {
      
      let avatar = <Avatar icon={<FontIcon className="fa fa-check" />} backgroundColor={Colors.blue400}/>

      if (card.answer != card.right) 
        avatar = <Avatar icon={<FontIcon className="fa fa-times" />}/>

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

    return (
      <Paper style={cardStyle} zDepth={2}>
        <List subheader="Your Results">
          {listItems}
        </List>
      </Paper>
    
    );
  }

});

module.exports = Results;
