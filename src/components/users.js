import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List, SimpleList, Datagrid,
  TextField, EditButton, EmailField,
  SimpleForm, TextInput, Create, Pagination,
} from 'react-admin';
import DeleteButtonWithConfirmation from './DeleteButtonWithConfirmation';

const UsersPagination = (props) => (
  <Pagination
    rowsPerPageOptions={[5, 10, 25, 50, 100]}
    {...props}
  />
);

export const UserTitle = ({ record }) => (
  <span>
    {' '}
    {record ? `"${record.name}"` : ''}
  </span>
);

export const UsersList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props} pagination={<UsersPagination />} delete={<DeleteButtonWithConfirmation />}>
      {isSmall
        ? (
          <SimpleList
            primaryText={(record) => record.name}
            secondaryText={(record) => record.company}
            tertiaryText={(record) => record.phone}
          />
        ) : (
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="company" />
            <EditButton />
            <DeleteButtonWithConfirmation />
          </Datagrid>
        )}
    </List>
  );
};

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="password" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Create>
);
