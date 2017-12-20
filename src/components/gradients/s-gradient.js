'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import themeable from 'react-themeable';

class SGradient extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    opacityLow: PropTypes.number.isRequired,
    opacityHigh: PropTypes.number.isRequired
  };

  render() {
    const theme = themeable(this.props.theme);
    const { active, opacityLow, opacityHigh } = this.props;

    if (!active) return <noscript />;
    return (
      <div>
        <div
          {...theme(1, 'gradient', 'gradientSaturation')}
          style={{ opacity: opacityHigh }}
        />
        <div
          {...theme(2, 'gradient')}
          style={{
            background: 'linear-gradient(to bottom, rgb(255,255,255) 0%, rgba(128,128,128,0) 50%, rgb(0,0,0) 100%)',
            opacity: opacityHigh
          }}
        />
        <div
          {...theme(3, 'gradient')}
          style={{
            background: 'linear-gradient(to bottom, rgb(255,255,255) 0%, rgb(128,128,128) 50%, rgb(0,0,0) 100%)',
            opacity: opacityLow
          }}
        />
      </div>
    );
  }
}

export default SGradient;
