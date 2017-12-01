import T from 'prop-types';
import React from 'react';

import View from './View';

class Button extends React.Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    return <View onClick={this.onClick} />;
  }
}

export default Button;