/* @jsx React.DOM */


var React = require('react');
var DefaultLayout = require('./layouts/default');
module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="main">
         <div className="word">Example Word
          </div>
          <ul className="player-list">
            <li>
              <button>A<i className="player one fa fa-wheelchair"></i></button>
            </li>
            <li>
              <button disabled="disabled">B<i className="player two fa fa-wheelchair"></i></button>
            </li>
            <li>
              <button disabled="disabled">C<i className="player three fa fa-wheelchair"></i></button>
            </li>
            <li>
              <button disabled="disabled">D<i className="player four fa fa-wheelchair"></i></button>
            </li>
          </ul>
          <button className="ready submit">Submit Vote</button>
        </div>
    </DefaultLayout>
    );
  }
});
