var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

// material ui theme depedency and setting 
var injectTapEventPlugin = require("react-tap-event-plugin");

var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');
var TopBar = require('./components/topbar.jsx')
var Question = require('./components/question.jsx')
var LeftMenu = require('./components/leftMenu.jsx')
var Results = require('./components/results.jsx')

injectTapEventPlugin();

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.grey50,
    });
  },

  render: function() {
    return (
      <div>
        <TopBar/>
        <div className="page">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var Questions = React.createClass({
  render: function() {
    return (
      <div>
        <Question/>
      </div>
    );
  }
})

var routes = (
  <Route name="app" handler={App} path="/">    
    <Route name="question" handler={Questions} path="question"></Route>
    <Route name="results" handler={Results} path="results"></Route>
  </Route>
);

Router.run(routes, function(Handler, state) {
  React.render(<Handler />, document.body);
})