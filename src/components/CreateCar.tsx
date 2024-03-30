import { Create,  SimpleForm, TextField, TextInput } from "react-admin";

export const CreateCar = (props: any) => {
    return (
    <Create title='Добавить машину'  {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="year"/>
            <TextInput source="price.value"/>


        </SimpleForm>

    </Create>
    
  )};