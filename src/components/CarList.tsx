import { Datagrid, DeleteButton, EditButton, ImageField, List, TextField } from "react-admin";

export const CarList = () => {
    return (
    <List>
        <Datagrid>
            <ImageField label='Фото' source="images[1].pathS3"/>
            <TextField source="name" />
            <TextField source="year" />
            <TextField source="id" />
            <TextField label='Цена' source="price.value" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
    
  )};