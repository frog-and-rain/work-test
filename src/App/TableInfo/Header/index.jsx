import React from 'react';

import { TableCell, TableHead, TableRow } from 'material-ui/Table';


const columnData = [
  { id: 'firstName', numeric: false, disablePadding: false, label: 'First name' },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'Last name' },
  { id: 'role', numeric: false, disablePadding: false, label: 'Role' },
  { id: 'emailAddress', numeric: false, disablePadding: false, label: 'Email address' },
];

const TableInfoHead  = () => (
  <TableHead>
    <TableRow>
      {columnData.map(column => {
        return (
          <TableCell
            key={column.id}
            numeric={column.numeric}
            padding={column.disablePadding ? 'none' : 'default'}
          >
            {column.label}
          </TableCell>
        );
      }, this)}
    </TableRow>
  </TableHead>
);

export default TableInfoHead;