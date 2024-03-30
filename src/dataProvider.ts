import simpleRestProvider from "ra-data-simple-rest";
import axios from 'axios';

const api = 'https://api.antcar.dev2.webant.ru/';

// Создание экземпляра Axios с базовым URL
const axiosInstance = axios.create({
  baseURL: api,
});

export const dataProvider = {
  //Список
  getList: async (resource: string,  params: any) => {
    try {
      const { data } = await axiosInstance.get(resource);
      return { data: data.items, total: data.countOfPages };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
  // Получить одну машину 
  getOne:   async  (resource: string, params: any) => {
    try {
      const  {data}  = await axiosInstance.get(`autos/${params.id}`);
      
      return { data};
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
  //Получить все
  getMany:  async  (resource: string, params: any) => {
    try {
      const  {data}  = await axiosInstance.get(resource); 
      return data.items; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
  getManyReference: async (resource: string, params: any) => {
    try {
      const  {data}  = await axiosInstance.get(resource); 
      return data.items; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
  //Cоздать
  create:   async (resource: string, params: any) => {
    try {
      const response = await axiosInstance.post(`autos/create`, params.data);
      return { data: response.data }; // Возвращаем объект с ключом data
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  }, 
  // обновить 
  update:    async (resource: string, params: any) => {
    try {
      const { data } = await axiosInstance.put(`autos/${params.id}`); 
      return data.items;
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
  updateMany: async (resource: string, params: any) => {
    try {
      const  {data}  = await axiosInstance.put(resource); 
      return data.items; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
  //удалить одну
  delete:   async  (resource: string, params: any) => {
    try {
      const response = await axiosInstance.delete(`${resource}/${params.id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  }, 
  //Удалить все
  deleteMany: async (resource: string, params: any) => {
    try {
      const  {data}  = await axiosInstance.get(resource); 
      return data.items; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }, 
};
