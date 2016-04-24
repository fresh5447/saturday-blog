var React = require('react');
var AllPostsData = require('./AllPostsData');


var AllPostsApp = React.createClass({
  render: function() {
    return <AllPostsData toggleBlogComp={this.props.toggleBlogComp}/>
  }
});

module.exports = AllPostsApp;