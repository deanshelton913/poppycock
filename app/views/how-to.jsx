/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');

module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <button className="back-to-home-button button">HOME</button>
        <section>
          <h2>HOW TO PLAY!</h2>
          <p>Hoodie banh mi readymade, yuccie listicle disrupt
          bespoke you probably havent heard of them literally ki
          tsch tacos lumbersexual.</p>
          <p> Drinking vinegar microdosing
          plaid thundercats. Gastropub brooklyn selfies, ugh
          street art occupy narwhal franzen mumblecore. Cliche
          keffiyeh</p>
          <p> biodiesel, iPhone intelligentsia echo park
          gentrify dist]die you probably
           havent heard of them authentic marfa.</p>
        </section>
    </DefaultLayout>
    );
  }
});
