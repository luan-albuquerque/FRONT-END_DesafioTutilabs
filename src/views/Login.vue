<template>
  <div class="body">
   <div class="layout"> 
     <div class="sidenav">
         <div class="login-main-text">
            <h2>Sistema de Controle de Colaboradores <br></h2>
            <p>Login Page</p>
         </div>
      </div>

      <div class="main">
         <div>
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>CPF</label>
                     <input type="text" v-model="v$.cpf.$model" class="form-control" placeholder="">
                          <div class="text-red" v-if="v$.cpf.$error">
                           O campo CPF é obrigatório.
                          </div>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" v-model="v$.password.$model" class="form-control" placeholder="Password">
                          <div class="text-red" v-if="v$.password.$error">
                        O campo Password é obrigatório.
                     </div>
                  </div>
                  <button type="submit" @click.prevent="login" class="btn btn-black">Login</button>
               </form>
            </div>
         </div>
      </div>

    </div>

  </div>
</template>

<script>
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import http from "../../services/login"

export default {
 setup: () => ({ v$: useVuelidate() }),
data(){
  return {
    cpf : "",
    password : ""
  }
},
validations(){
  return{
     cpf : { required },
     password : {required},
  }
},
methods:{
    async login(){
      let Toast = this.$swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', this.$swal.stopTimer)
    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
  }
})
  
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) {
        Toast.fire({
          icon: "error",
          title: "Preencher todos os campos obrigatorios!",
        });
        return
    }
    
    await http.login({cpf : this.cpf, password : this.password}).then((res)=>{
     sessionStorage.setItem("token",res.data.authenticate.token)
     sessionStorage.setItem("user",res.data.authenticate.user.nome)

        Toast.fire({
          icon: "success",
          title: "Logado com sucesso!",
        });
        this.$router.push({
          path : "/home"
        })
   }).catch((error)=>{
        Toast.fire({
          icon: "error",
          title: "CPF e Password incorretos!",
        });
   })
  
    }
}
}
</script>

<style>

.body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

.layout{
    display: flex;
    width: 100%;
    height: 100vh;    
}

.login-form{
    display: flex;
    flex-direction: column;
  
}
.login-main-text h2 {
    font-weight: 300;
}

.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color:#94ba65;
    overflow-x: hidden;
    /* padding-top: 20px; */
}


.main {
    margin-top: 20px;
    padding: 0px 10px;
    display: flex;
    margin-left: 20px;
    align-items: center;
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #94ba65 !important;
    color: #fff;
}

@media screen and (max-width: 425px) {
    .layout{
        flex-direction: column;
    }
}
</style>