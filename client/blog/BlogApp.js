var React = require('react');
var AllPostsApp = require('./AllPostsApp');
var NewPost = require('./NewPost');
var OnePost = require('./OnePost');

/*
  -BlogApp
    -AllPostsApp
      -AllPostsData          --> Gets All Data and passes it down.
        -PostList            --> Passes data to PostDisplay component
        -PostDisplay         --> Pure render (stateless), for each post
    -OnePost
      --OnePostData
        --OnePostDisplay
    -NewPost
      -- PostFormData
        -- PostFormDisplay
*/

var BlogApp = React.createClass({
  getInitialState: function() {
    return {
      activeBlogComp: 'AllPostsApp',
      activeBlogId: null
    }
  },
  showBlogComp: function() {
    if(this.state.activeBlogComp === 'AllPostsApp'){
      return <AllPostsApp toggleBlogComp={this.toggleBlogComp}/>
    } else if(this.state.activeBlogComp === 'NewPost'){
      return <NewPost toggleBlogComp={this.toggleBlogComp} />
    } else if(this.state.activeBlogComp === 'OnePost') {
      return this.state.activeBlogId ? <OnePost id={ this.state.activeBlogId }/> : null;
    }
  },
  toggleBlogComp: function(compName, id) {

    if(id){
      console.log("setting activeBlogId", id)
      this.setState({ activeBlogComp: compName, activeBlogId: id });
    } else {
      this.setState({ activeBlogComp: compName });
    }



  },
  render: function() {
    return (
      <div>
      <button className="btn btn-primary" onClick={this.toggleBlogComp.bind(null, 'NewPost')}> New Post </button>
      <button className="btn btn-primary" onClick={this.toggleBlogComp.bind(null, 'AllPostsApp')}> All Posts </button>
        { this.showBlogComp() }
      </div>
      )
  }
});

module.exports = BlogApp;