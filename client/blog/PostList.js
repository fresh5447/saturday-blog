var React = require('react');
var PostDisplay = require('./PostDisplay');

var PostList = function(props) {

  var posts = props.posts.map(function(item){
    return <PostDisplay title={item.title} content={item.content} img={item.img}/>
  });

  return ( 
    <div className="my-flex-box">
      { posts }
    </div>
    )

};

module.exports = PostList;