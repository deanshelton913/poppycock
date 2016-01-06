var React = require('react');
var IndexTemplate = React.createClass({
  render: function() {
    return (
      <div>
        <button className="ready">I'm Ready</button>
        <button className="how-to-play">How To Play</button>
      </div>
    );
  }
});

module.exports = IndexTemplate;
