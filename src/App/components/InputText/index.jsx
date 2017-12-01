import React from 'react';
import T from 'prop-types';
import View from './View';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <View
        onChange={this.onChange}
        value={this.props.value ? this.props.value : this.state.value}
        type={this.props.type}
      />
    );
  }
}

InputText.propTypes = {
  type: View.propTypes.type,
  value: T.string,
};

export default InputText;