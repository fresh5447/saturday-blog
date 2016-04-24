var React = require('react');
var OnePostData = require('./OnePostData');


var OnePost = React.createClass({
  render: function() {
    return <OnePostData id={this.props.id} />
  }
});

module.exports = OnePost;