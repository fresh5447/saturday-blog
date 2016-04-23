var React = require('react');

/*
  -BlogApp
    -AllPosts
    -OnePost
    -NewPost
*/

var OnePost = React.createClass({
  render: function() {
    return (
      <div>
        <h4> This componenet shows just one blog post! </h4>
      </div>
      )
  }
});

module.exports = OnePost;