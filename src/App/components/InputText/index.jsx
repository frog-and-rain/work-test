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
    const { onChange, info } = this.props;
    onChange({ id: !!info && info.id, value: e.target.value });
  }

  render() {
    return (
      <View
        onChange={this.onChange}
        value={this.props.value ? this.props.value : this.state.value}
        type={this.props.type} required={this.props.required}
      />
    );
  }
}

InputText.propTypes = {
  ...View.propTypes,
  info: T.object,
};

export default InputText;