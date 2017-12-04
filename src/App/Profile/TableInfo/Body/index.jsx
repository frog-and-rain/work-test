import T from 'prop-types';
import React from 'react';
import InputText from 'App/components/InputText';
import { TableBody, TableCell, TableRow } from 'material-ui/Table';

const Body = ({ users, editing, setFirstName, setLastName }) => (
  <TableBody>
    {users.map(item => {
      return (
        <TableRow key={item.emailAddress}>
          <TableCell>
            {editing ? (
              <InputText type='text' value={item.firstName} onChange={setFirstName} info={item} />
            ) : (
              item.firstName
            )}
          </TableCell>
          <TableCell>
            {editing ? (
              <InputText type='text' value={item.lastName} onChange={setLastName} info={item} />
            ) : (
              item.lastName
            )}
          </TableCell>
          <TableCell>{item.role}</TableCell>
          <TableCell>{item.emailAddress}</TableCell>
        </TableRow>
      );
    })}
  </TableBody>
);

Body.propTypes = {
  users: T.array.isRequired,
  editing: T.bool.isRequired,
  setLastName: T.func.isRequired,
  setFirstName: T.func.isRequired,
};

export default Body;