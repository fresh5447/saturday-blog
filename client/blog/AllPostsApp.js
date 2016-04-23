var React = require('react');
var AllPostsData = require('./AllPostsData');

/*
  -BlogApp
    -AllPosts
    -OnePost
    -NewPost
*/

var AllPostsApp = React.createClass({
  render: function() {
    return <AllPostsData />
  }
});

module.exports = AllPostsApp;