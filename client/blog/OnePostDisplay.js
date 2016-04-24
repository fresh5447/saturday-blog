var React = require('react');

var OnePostDisplay = function(props) {
  console.log(props)
  return (
    <div>
      <h4> { props.post.title }</h4>
      <img className="profile-img" src={ props.post.img }/>
      <p> { props.post.content } </p>
    </div>
    )
}

module.exports = OnePostDisplay;