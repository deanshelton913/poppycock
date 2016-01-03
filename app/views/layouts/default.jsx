/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="/favicon.ico?v=2" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway|Pacifico|Chewy|Cookie" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="/stylesheets/app.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
          <div id="content">
            <h1 className="wordmark">POPPYCOCK</h1>
            {this.props.children}
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.7/socket.io.min.js" type="text/javascript" />
          <script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript" />
          <script src="/javascripts/client.js" type="text/jsx" />
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
