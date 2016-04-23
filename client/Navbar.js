var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">DW</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
      )
  }
});

module.exports = Navbar