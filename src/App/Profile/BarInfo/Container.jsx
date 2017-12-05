import React from 'react';
import { Container, Avatar, InfoText, Name, Role, InfoImage } from './components.styled';

const BarInfo = (props) => {
  const { users, current } = props;
  const index = users.findIndex(item => item.id === current);
  const user = users[index];
  if (!user) {
    return null;
  }
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