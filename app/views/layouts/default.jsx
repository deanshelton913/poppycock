var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="shortcut icon" href="/favicon.ico?v=2" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway|Pacifico|Chewy|Cookie" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="/stylesheets/app.css"/>
        </head>
        <body>
            {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;