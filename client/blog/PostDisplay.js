var React = require('react');

var PostDisplay = function(props){
  return (
    <div className="card col-sm-4">
      <img className="card-img-top profile-img" src={ props.img } alt="Card image cap"/>
      <div className="card-block">
        <h4 className="card-title">{ props.title }</h4>
        <a href="#" className="btn btn-primary">Show</a>
      </div>
    </div>
    )
};

module.exports = PostDisplay;