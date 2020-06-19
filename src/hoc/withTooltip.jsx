/**
 * Higher Order Component Example
 */

import React from 'react';

const withTooltip = Component => {
  return class WithTooltip extends React.Component {
    state = { showTooltip: false }

    handleMouseOver = () => this.setState({ showTooltip: true });

    handleMouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <Component {...this.props} />
          {this.state.showTooltip && 'Tooltip'}
        </div>
      );
    }
  }
};

export default withTooltip;