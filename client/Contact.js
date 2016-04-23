var React = require('react');

var Contact = React.createClass({
  render: function() {
    return (
      <div className="container">
        <form action=""role="form">
          <legend>Contact Me</legend>
        
          <div className="form-group">
            <label>your email</label>
            <input type="text" className="form-control" id="" placeholder="email@sample.com"/>
          </div>


          <div className="form-group">
            <label>message</label>
            <input type="text" className="form-control" id="" placeholder="Your message"/>
          </div>
        
          
        
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      )
  }
});

module.exports = Contact;