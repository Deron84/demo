import React, { Component } from 'react';

import '../../assets/css/pub/chart-example-home-china.scss';
import PropTypes from 'prop-types';

export default class ChartExampleHomeDark extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  static defaultProps = {
    style: {}
  };

  render() {
    return (
      <div className="chart-example-home-china dark" style={this.props.style}>
        <div className="item">
          <span className="color-icon normal-otm" />
          <span className="color-description">OTM</span>
        </div>
        <div className="item">
          <span className="color-icon normal-cpe" />
          <span className="color-description">CPE</span>
        </div>
        <div className="item">
          <span className="color-icon normal-oa" />
          <span className="color-description">OA</span>
        </div>
        <div className="item fault">
          <span className="normal">正常</span>
          <span className="error">故障</span>
        </div>
      </div>
    );
  }
}
