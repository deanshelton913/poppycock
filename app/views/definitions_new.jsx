/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');
module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>

        <div id="newWord">
          <div className="word">Example Word
          </div>
        </div>
    </DefaultLayout>
    );
  }
});
