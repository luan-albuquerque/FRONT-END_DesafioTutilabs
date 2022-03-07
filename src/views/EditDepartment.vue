<template>
  <Layout>
<div class="main">
 <h3>Editar Departamento</h3>
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Descrição</label>
      <input type="text" class="form-control" v-model="v$.description.$model"  required>
          <div class="text-red" v-if="v$.description.$error">
          O campo descrição é obrigatório.
        </div>
    </div>
  </div>
    <button type="submit" @click.prevent="edit(id)" class="btn btn-black">Editar</button>
               
</form>
</div>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue"
import http from "../../services/department"
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name : "departmentEdit",
components : {
  Layout
},
 setup: () => ({ v$: useVuelidate() }),
data(){
  return {
   department : [],
   description: "",
   oldDescription: "",
   id : "",
  }
},
validations(){
   return{
      description : {required }
     
    }
},
async created(){
  const id = this.$route.params.id
  const department = await http.findByDepartment(id);
  const data = department.data.list   
  this.oldDescription = data.description
  this.description = data.description
  this.id = data.id
},
methods : {
  
  async edit(id){
    
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
        return;
      }

   if(this.description == this.oldDescription){
       Toast.fire({
          icon: "warning",
          title: "O campo descrição não sofreu alteração!",
        });
        return;
   }


   const res = await http.updateDepartment(id, {
      description : this.description
    })

    if(res.status == 200){
    Toast.fire({
          icon: "success",
          title: "Departamento Alterado!",
        });
   this.$router.push({ path: '/department' })
    }
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

.text-red{
  color: red;
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