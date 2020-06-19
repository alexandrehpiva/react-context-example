/**
 * Using a Higher Order Component Example
 */

import React from 'react';
import withTooltip from '../hoc/withTooltip';

const Text = () => (
  <div>Hello World!</div>
);

export default withTooltip(Text);