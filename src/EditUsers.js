import React from 'react';
import { UrlField, Filter, List, Datagrid, TextField, EditButton, EmailField, SimpleForm, TextInput, ReferenceInput, SelectInput, Create, Edit } from 'react-admin';
import MyUrlField from './MyUrlField';


const UserTitle = ({ record }) => {
    return <span> {record ? `"${record.name}"` : ''}</span>;
};

export const EditList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="company" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UsersEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="email" />
            <TextInput multiline source="company" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            {/* <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
            </ReferenceInput> */}
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="company" />
        </SimpleForm>
    </Create>
);


export const UserFilter = (props) => (
    <Filter {...props}>
       <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="email" />
            <TextInput multiline source="company" />
    </Filter>
);

export const UseList = (props) => (
    <List filters={<UserFilter />} {...props}>
        // ...
    </List>
);