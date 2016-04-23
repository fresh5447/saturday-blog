var React = require('react');

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
    return (
      <div>
        <h5> Stupid Divs </h5>
      </div>
      )
  }
});

module.exports = AllPostsData;