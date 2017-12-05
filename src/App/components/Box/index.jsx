import T from 'prop-types';
import React from 'react';
import { Container, Title, Header, HeaderContent, Body } from './components.styled';

const Box = ({ children, title, action }) => (
  <Container>
    <Header>
      <HeaderContent>
        <Title>{title}</Title>
        {action}
      </HeaderContent>
    </Header>
    <Body>
      {children}
    </Body>
  </Container>
);

Box.propTypes = {
  children: T.node,
  title: T.string.isRequired,
  action: T.node,
};

export default Box;