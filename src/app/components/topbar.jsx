/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react')
let mui = require('material-ui')
let ThemeManager = new mui.Styles.ThemeManager()
let Colors = mui.Styles.Colors
let AppBar = mui.AppBar
let LeftNav = mui.LeftNav
let MenuItem = mui.MenuItem

let TopBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
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

   _onLeftIconButtonTouchTap: function() {
        this.refs.leftNav.toggle();
    },

    _onLeftNavChange: function(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    },

  render() {
    let menuItems = [
            { type: MenuItem.Types.SUBHEADER, text: 'Ishihara Test' },
            { route: 'test', text: 'Begin Test' },
            { route: 'instructions', text: 'Instructions' },
            { type: MenuItem.Types.SUBHEADER, text: 'About this app' },
            { route: 'about', text: 'About Ishihara Test' },
            {
             type: MenuItem.Types.LINK,
             payload: 'https://github.com/fcopantoja',
             text: 'GitHub'
            },
        ];

    return (
    <div>
      <AppBar
        title="Color Vision Test"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this._onLeftNavChange} />
        </div>
    );
  }

});

module.exports = TopBar;
