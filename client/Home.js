var React = require('react');

/* 
HOME
  Jumbotron
  Skills Section
  Portfolio
*/

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Doug Walter</h1>
            <p>Freelance Developer</p>
            <p>
              <a className="btn btn-primary btn-lg">View Skills</a>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img className="card-img-top" src="http://i.onionstatic.com/onion/2508/0/original/600.jpg" alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">Full Stack Developer</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h3> A summary of my skills </h3>
              <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
          </div>
        </div>
      </div>
      )
  }
});

module.exports = Home;