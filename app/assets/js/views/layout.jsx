var React = require('react');
var DefaultLayout = React.createClass({
  render: function() {
    var title = 'POPPYCOCK';
    return (
      <html>
        <head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="/favicon.ico?v=2" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway|Pacifico|Chewy|Cookie" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="/stylesheets/app.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
          <div id="content">
            <h1 className="wordmark">{title}</h1>
            <div id="main"></div>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.7/socket.io.min.js" type="text/javascript" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.5/react.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.5/react-dom.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
          <script src="/javascripts/client.js" type="text/javascript" />
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
