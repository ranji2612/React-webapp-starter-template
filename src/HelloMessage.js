var React = require('react');

class HelloMessage extends React.Component {
  render(): React.element {
    return <div>Hello {this.props.name}</div>;
  }
};

module.exports = HelloMessage;
