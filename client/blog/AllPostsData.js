var React = require('react');
var PostList = require('./PostList');


var AllPostsData = React.createClass({
  getInitialState: function() {
    return {
      allPosts: null
    }
  },
  loadPostsFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(data){
      console.log('FOUND DATA', data)
      self.setState({ allPosts: data })
    })
  },
  componentWillMount: function() {
    this.loadPostsFromServer();
  },
  render: function() {
    return this.state.allPosts ? <PostList toggleBlogComp={this.props.toggleBlogComp} posts={ this.state.allPosts } /> : null;
  }
});

module.exports = AllPostsData;