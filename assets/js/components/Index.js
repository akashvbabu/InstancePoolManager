var React = require('react');
var ReactDOM = require('react-dom');

var TestClass = React.createClass({
  render: function(){
    return(
      <div className="testing">
        <h2>Interface Coming soon!!!</h2>
      </div>
    );
  }
});

ReactDOM.render(<TestClass />, document.getElementById("app"));
