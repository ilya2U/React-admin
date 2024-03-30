import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { CarList } from "./components/CarList";
import { CreateCar } from "./components/CreateCar";
import { CarEdit } from "./components/CarEdit";



export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="autos"
      list={CarList}
      create={CreateCar}
      edit = {CarEdit}
    />
  </Admin>
);
