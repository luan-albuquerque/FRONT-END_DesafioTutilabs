import { http } from "../config";

export default {

      listDepartment: async() =>{
      try{
        return await http.get("department");
      }catch(error){
        return error;
      }
    },
    findByDepartment: async(id) =>{
      try{
        return await http.get(`department/${id}`);
      }catch(error){
        return error;
      }
    },
    updateDepartment: async(id,data) =>{
      try{
        return await http.put(`department/${id}`,data);
      }catch(error){
        return error;
      }
    },
    createDepartment: async(data) =>{
      try{
        return await http.post(`department`,data);
      }catch(error){
        return error;
      }
    },
    deleteDepartment: async(id) =>{
      try{
        return await http.delete(`department/${id}`);
      }catch(error){
        return error
      }
    },
    
  
  }