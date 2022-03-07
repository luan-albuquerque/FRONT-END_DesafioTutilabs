import { http } from "../config";

export default {

      createCollaborator: async(data) =>{
      try{
        return await http.post("collaborator",data);
      }catch(error){
        return error;
      }
    },
    
    listCollaborator: async() =>{
      try{
        return await http.get("collaborator");
      }catch(error){
        return error;
      }
    },
    deleteCollaborator: async(id) =>{
      try{
        return await http.delete(`collaborator/${id}`);
      }catch(error){
        return error;
      }
    },
    findByCollaborator: async(id) =>{
      try{
        return await http.get(`collaborator/${id}`);
      }catch(error){
        return error;
      }
    },
    updateCollaborator: async(id,data) =>{
      try{
        return await http.put(`collaborator/${id}`,data);
      }catch(error){
        return error;
      }
    },

  }