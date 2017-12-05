import React from 'react';
import T from 'prop-types';
import InputText from 'App/components/InputText';
import { Container, Label } from './components.styled';

const Field = ({ title, type, value, onChange, required }) => (
  <Container>
    <Label>{title}</Label>
    <InputText type={type} onChange={onChange} value={value} required={required} />
  </Container>
);

Field.propTypes = {
  title: T.string,
  ...InputText.propTypes,
};

export default Field;