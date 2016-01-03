/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');
module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="word">
          <div className="word">Example Word
          </div>
        </div>
        <div className="definition-input">
          <input className="user-def"/>
        </div>
        <button className="ready submit">Submit</button>
    </DefaultLayout>
    );
  }
});
