var React = require('react');
var DefaultLayout = require('./layouts/default');
var ErrorTemplate = React.createClass({
    render: function() {
      return (
        <DefaultLayout title={this.props.title}>
          <div>{this.props.error}</div>
        </DefaultLayout>
      );
    }
});

module.exports = ErrorTemplate;
