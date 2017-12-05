import React from 'react';
import TableInfo from './TableInfo';
import UpdateForm from './UpdateForm';
import BarInfo from './BarInfo';
import { Container } from './components.styled';

const Profile = () => (
  <Container>
    <BarInfo />
    <TableInfo />
    <UpdateForm />
  </Container>
);

export default Profile;