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

let Results = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return null
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
      width: '80%',
      margin: '0 auto',
      marginTop: '40px',
      
    }

    return (
      <div>
      <Card style={cardStyle}>
        <CardHeader
          title="Resultados"
          subtitle="Ishihara Color Vision Test"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>
      </Card>
      <Card style={cardStyle}>
        <CardHeader
          title="Resultados"
          subtitle="Ishihara Color Vision Test"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>
      </Card>
      <Card style={cardStyle}>
        <CardHeader
          title="Resultados"
          subtitle="Ishihara Color Vision Test"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>
      </Card>
      <Card style={cardStyle}>
        <CardHeader
          title="Resultados"
          subtitle="Ishihara Color Vision Test"
          avatar={<Avatar icon={<FontIcon className="fa fa-eye" />}/>}/>
      </Card>
      </div>
    
    );
  }

});

module.exports = Results;
