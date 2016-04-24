var React = require('react');
var PostFormData = require('./PostFormData');

var NewPost = React.createClass({
  render: function() {
    return <PostFormData toggleBlogComp={this.props.toggleBlogComp}/>
  }
});

module.exports = NewPost;