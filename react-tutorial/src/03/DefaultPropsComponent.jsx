import React, { Component } from 'react';

class DefaultPropsComponent extends Component {
  render() {
    const message = this.props.boolValue ? '트루' : '펄스';

    return (
      //
      <div>{message}</div>
    );
  }
}

DefaultPropsComponent.defaultProps = {
  boolValue: true,
};

export default DefaultPropsComponent;
