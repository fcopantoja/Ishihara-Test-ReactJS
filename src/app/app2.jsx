// not using an ES6 transpiler

let React = require('react/addons');
let injectTapEventPlugin = require('react-tap-event-plugin');


var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let TopBar = require('./components/topbar.jsx')
let LeftMenu = require('./components/leftMenu.jsx')
let Question = require('./components/question.jsx')

injectTapEventPlugin();



const App = React.createClass({
  render() {
    return (
      <div>
        <TopBar/>
        <LeftMenu/>
         <RouteHandler/>        
      </div>
    )
  }
})

/*React.render(
	(<Router>
	   <Route path="/" component={App}>
        <Route path="question/:questionNumber" component={Question}>
    	 </Route>
      </Route>
    </Router>), document.body)*/

var routes = (
  <Route name="app" handler={App} path="/">
    <Route name="question" path="/question" handler={Question}/>
  </Route>
);

console.log(Router.Router)
Router.Router.run(routes, function(Handler, state) {
  React.render(<Handler />, document.body);
}) 


