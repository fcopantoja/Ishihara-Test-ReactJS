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
var Test = require('./components/test.jsx')
var Results = require('./components/results.jsx')
var AboutPage = require('./components/about.jsx')
var InstructionsPage = require('./components/instructions.jsx')

var Reflux = require('reflux')
var CardStore = require('./stores/CardStore.jsx');
var CardActions = require('./actions/CardActions.jsx');

injectTapEventPlugin();

var App = React.createClass({
  mixins: [Reflux.connect(CardStore, 'cardStore')],

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

var routes = (
  <Route name="app" handler={App} path="/">    
    <Route name="test" handler={Test} path="test"></Route>
    <Route name="results" handler={Results} path="results"></Route>
    <Route name="about" handler={AboutPage} path="about"></Route>
    <Route name="instructions" handler={InstructionsPage} path="instructions"></Route>
    <DefaultRoute handler={InstructionsPage} />
  </Route>
);

Router.run(routes, function(Handler, state) {
  React.render(<Handler />, document.body);
})