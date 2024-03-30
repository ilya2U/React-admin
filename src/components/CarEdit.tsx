import { Datagrid, DateField, DateInput, Edit, EditButton, Form, ImageField, ReferenceManyField, SimpleForm, TextField, TextInput, required } from "react-admin";

export const CarEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="year" />
            <TextInput source="id" />
            <TextInput source="price.value" />
        </SimpleForm>
    </Edit>
          
           

   
);