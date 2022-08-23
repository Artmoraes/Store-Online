import React from 'react';
import PropTypes from 'prop-types';

class Avaliation extends React.Component {
  render() {
    const { email, rate, text } = this.props;
    return (
      <>
        <p data-testid="product-detail-email">{ email }</p>
        <p>{ rate }</p>
        <p>{ text }</p>
      </>
    );
  }
}

Avaliation.propTypes = {
  email: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Avaliation;
