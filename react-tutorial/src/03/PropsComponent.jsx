import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return (
      //
      <div>{this.props.name}</div>
    );
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
