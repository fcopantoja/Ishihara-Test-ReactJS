let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let Paper = mui.Paper;
let RaisedButton = mui.RaisedButton;

let ReactRouter = require('react-router')
let Router = ReactRouter.Router
let Route = ReactRouter.Route
let Link = ReactRouter.Link
let FloatingActionButton = mui.FloatingActionButton

let Question = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {question: 1};
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
    //this.context.router.transitionTo('clock');
    let number = this.state.question
    console.log(number)
    this.setState({question: number + 1})
  },

  render() {

    let styles = {
      position: 'relative',
      width: '200px',
      float:'left'
    }

    console.log(this.state)

    return (
      <Paper zDepth={1}>
      <div>
      {this.state.question}
      <img src='http://www.color-blindness.com/wp-content/images/Ishihara-Plate-31-38.jpg'/>
      <div className="floating">
        <FloatingActionButton iconClassName="fa fa-chevron-left" secondary={true}/>
        <FloatingActionButton iconClassName="fa fa-refresh" secondary={true}/>
        <FloatingActionButton iconClassName="fa fa-chevron-right" secondary={true} onClick={this.handleNext}/>
      </div>
      </div>
      </Paper>
    );
  }

});

module.exports = Question;
