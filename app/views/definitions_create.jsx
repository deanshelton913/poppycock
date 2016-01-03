/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');
module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
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
            <button className="back-to-home-button button quit">Withdraw</button>

          </ul>
          </DefaultLayout>
    );
  }
});
