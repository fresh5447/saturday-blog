var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Hello, World!!!! </h3>
      </div>
      )
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));