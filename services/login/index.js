import { http } from "../config";

export default {

      login: async(data) =>{
      try{
        return await http.post("login",data);
      }catch(error){
        return error;
      }
    },
    verifyLogin: async(data) =>{
      try{
        return await http.get("login/verify");
      }catch(error){
        return error;
      }
    },

  }