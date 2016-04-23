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
      </div>
      )
  }
});

module.exports = Home;