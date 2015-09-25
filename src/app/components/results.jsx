let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;


let Paper = mui.Paper
let Table = mui.Table
let TableHeader = mui.TableHeader
let TableRow = mui.TableRow
let TableHeaderColumn = mui.TableHeaderColumn
let TableBody = mui.TableBody
let TableRowColumn = mui.TableRowColumn
let TableFooter = mui.TableFooter
let Avatar = mui.Avatar
let FontIcon = mui.FontIcon

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

  getDefaultProps() {
    return {
      cards:[
        {'right': 12, type: 'number', 'answer': 12},
        {'right': 3, type: 'line', 'answer': 4},
        {'right': 4, type: 'line', 'answer': 5},
        {'right': 12, type: 'number', 'answer': 12},
        {'right': 3, type: 'line', 'answer': 4},
        {'right': 4, type: 'line', 'answer': 5},
        {'right': 12, type: 'number', 'answer': 12},
        {'right': 3, type: 'line', 'answer': 4},
        {'right': 4, type: 'line', 'answer': 5},
        {'right': 12, type: 'number', 'answer': 12},
        {'right': 3, type: 'line', 'answer': 4},
        {'right': 4, type: 'line', 'answer': 5},
      ]
    }
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

    /*{card.answer === card.right &&
            <Avatar icon={<FontIcon className="fa fa-check" />} backgroundColor={Colors.blue400}/>}
          </TableRowColumn>*/

    let rows = this.props.cards.map(function(card, index) {
      return (
        <TableRow key={index}>
          <TableRowColumn>{index + 1}</TableRowColumn>
          <TableRowColumn>{card.right}</TableRowColumn>
          <TableRowColumn>{card.answer}</TableRowColumn>
          <TableRowColumn>{card.type}</TableRowColumn>
          <TableRowColumn>2323</TableRowColumn>
        </TableRow>
      )
    })

    return (
      <Paper style={cardStyle} zDepth={2}>
      <Table
        height={this.state.height}
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        selectable={this.state.selectable}>
        <TableHeader enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}} style={{backgroundColor:'#00bcd4', width:'100%', color:'white'}}>
              <h2>Your Results</h2>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip='The Number'>Number</TableHeaderColumn>
            <TableHeaderColumn tooltip='The Answer'>Answer</TableHeaderColumn>
            <TableHeaderColumn tooltip='The RIght Answer'>Right</TableHeaderColumn>
            <TableHeaderColumn tooltip='The Type'>Type</TableHeaderColumn>
            <TableHeaderColumn tooltip='Correct/Wrong'>Correct/Wrong</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}>
          {rows}
        </TableBody>
      </Table>
      </Paper>
    
    );
  }

});

module.exports = Results;
