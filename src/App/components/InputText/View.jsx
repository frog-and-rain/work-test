import T from 'prop-types';
import React from 'react';
import { Input } from './components.styled';

const InputTextView = ({ type, onChange, value, required }) => (
  <Input type={type} onChange={onChange} value={value} required={required} />
);

InputTextView.defaultProps = {
  type: 'text',
};

InputTextView.propTypes = {
  type: T.string,
  required: T.bool,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default InputTextView;