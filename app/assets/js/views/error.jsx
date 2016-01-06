var React = require('react');
var DefaultLayout = require('./layout');
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
