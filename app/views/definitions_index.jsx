/* @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');

module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="main">
        <button className="ready">Im Ready</button>
          <button className="how-to-play">How To Play</button>

          <div className="display-defintions">
            <ul className="definitions-list">
              <li>Hoodie banh mi readymade, yuccie listicle disrupt
          bespoke you probably havent heard of them literally ki
          tsch tacos lumbersexual.</li>
              <li>Hoodie banh mi readymade, yuccie listicle disrupt
          bespoke you probably havent heard of them literally ki
          tsch tacos lumbersexual.</li>
              <li>Hoodie banh mi readymade, yuccie listicle disrupt
          bespoke you probably havent heard of them literally ki
          tsch tacos lumbersexual.</li>
              <li>Hoodie banh mi readymade, yuccie listicle disrupt
          bespoke you probably havent heard of them literally ki
          tsch tacos lumbersexual.</li>
              <li>Hoodie banh mi readymade, yuccie listicle disrupt
          bespoke you probably havent heard of them literally ki
          tsch tacos lumbersexual.</li>
            </ul>
          </div>
        </div>
    </DefaultLayout>
    );
  }
});
