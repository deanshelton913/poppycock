var React = require('react');
var IndexTemplate = React.createClass({
  render: function() {
    return (
      <div>
        <button className="ready">I'm Ready</button>
        <button className="how-to-play">How To Play</button>
        <ul className="player-list">
          <li>
            <button>Waiting...<i className="player one fa fa-gamepad"></i></button>
          </li>
          <li>
            <button disabled="disabled">Waiting..<i className="player two fa fa-gamepad"></i></button>
          </li>
          <li>
            <button disabled="disabled">Waiting..<i className="player three fa fa-gamepad"></i></button>
          </li>
          <li>
            <button disabled="disabled">Waiting..<i className="player four fa fa-gamepad"></i></button>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = IndexTemplate;
