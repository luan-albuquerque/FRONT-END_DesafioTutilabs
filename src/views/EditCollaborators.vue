<template>
  <Layout>
<div class="main">
 <h3>Editar Colaboradores</h3>
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Nome</label>
      <input type="text" class="form-control" v-model="v$.nome.$model"  required>
          <div class="text-red" v-if="v$.nome.$error">
          O campo Nome é obrigatório.
        </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">CPF</label>
      <input type="text" class="form-control" v-model="v$.cpf.$model"  required>
          <div class="text-red" v-if="v$.cpf.$error">
          O campo CPF é obrigatório.
        </div>
    </div>
    
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Departamento</label>
      <select class="form-control" v-model="v$.fk_department.$model">
       <option v-for="l in listDepartment" :key="l.id" :value="l.id" >
         {{l.description}}
         </option>
      </select>
             <div class="text-red" v-if="v$.fk_department.$error">
          O campo Departamento é obrigatório.
        </div>
    </div>
  
   <div class="col-md-4 mb-3">
      <label for="validationCustom02">Password</label>
      <input type="password" class="form-control" v-model="v$.password.$model"  required>
          <div class="text-red" v-if="v$.password.$error">
          O campo password é obrigatório.
        </div>
    </div>
  </div>
    <button type="submit" @click.prevent="update" class="btn btn-black">Editar</button>
               
</form>
</div>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue"
import http from "../../services/colaborators"
import httpDep from "../../services/department"

import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name : "collaboratorsEdit",
components : {
  Layout
},
data(){
  return {
    id : "",
    nome : "",
    cpf : "",
    password: "",
   fk_department: "",
   listDepartment : []
  }
},
setup: () => ({ v$: useVuelidate() }),
validations(){
  return{
    nome : { required },
     cpf : { required },
     password : {required},
    fk_department : { required }
  }
},
async created(){
  const id = this.$route.params.id
  const res = await http.findByCollaborator(id);
  const resDep = await httpDep.listDepartment();
  this.listDepartment = resDep.data.list
  this.id = res.data.list.id
  this.nome = res.data.list.nome
  this.cpf = res.data.list.cpf
  this.fk_department = res.data.list.fk_department

},
methods:{
  async update(){
  
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

  await this.$swal.fire({
  title: 'Tem certeza que deseja editar novo usuario?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim'
}).then(async (result) => {
  if (result.isConfirmed) {
  
    const data = {
      nome : this.nome,
      cpf:this.cpf,
      password:this.password,
      fk_department:this.fk_department
  }
   const res = await http.updateCollaborator(this.id, data);

   if(res.status){
         Toast.fire({
          icon: "success",
          title: "Usuario Editado!",
        });

        this.$router.push({
          path :  "/collaborators"
        })
   }else{
        Toast.fire({
          icon: "error",
          title: "CPF já existente",
        });
   }
  }
})
  

  }
}
}
</script>

<style>
h3 {
  color: #94ba65;
}
.main{
  padding: 50px;
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

.btn-black{
    background-color: #94ba65 !important;
    color: #fff;
}
</style>