/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');

module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <section>
          <h2>How To</h2>
          <p>Instructions go here.</p>
        </section>
    </DefaultLayout>
    );
  }
});
