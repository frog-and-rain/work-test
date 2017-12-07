import React from 'react';
import { Container, Avatar, InfoText, Name, Role, InfoImage } from './components.styled';

const BarInfo = (props) => {
  const { user } = props;
  return (
    <Container>
      <Avatar>
        <InfoImage>{`${user.firstName[0]} ${user.lastName[0]}`}</InfoImage>
      </Avatar>
      <InfoText>
        <Name>
          {user.firstName}{' '}{user.lastName}
        </Name><br/>
        <Role>{user.role}</Role>
      </InfoText>
    </Container>
  );
};

export default BarInfo;