<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">CPF</th>
      <th scope="col">Departamento</th>
      <th scope="col">Opção</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="l in list" :key="l.id">
      <th scope="row">{{l.nome}}</th>
      <td>{{l.cpf}}</td>
      <td>{{l.department.description}}</td>
      <td>
         <div class="group-button">
        <button class="btn btn-blue" @click="() => this.$router.push({ 
          name: 'collaboratorsEdit',  
          params: {id: l.id } })" > Editar</button>
        <button class="btn btn-red" @click="excluir(l.id)">Excluir</button>
         </div>
      </td>
    </tr>

  </tbody>
</table>
</template>

<script>
import http from "../../../services/colaborators"
export default {
async created(){
  const res = await http.listCollaborator();
   this.list = res.data.list
},
data(){
  return {
    list : []
  }
},
methods : {
  async excluir(id){
     
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


await this.$swal.fire({
  title: 'Tem certeza que deseja deletar o colaborador?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim'
}).then(async (result) => {
  if (result.isConfirmed) {
  
  const res = await http.deleteCollaborator(id);

 if(res.status){
         Toast.fire({
          icon: "success",
          title: "Colaborador Excluido!",
        });

        this.$router.push({
          path :  "/collaborators"
        })
   }
  }
})

   }
}
}
</script>

<style>


.group-button{
  display: flex;
  gap: 10px;
}

.btn-blue{
  background-color: blue;
  color: #fff;
}

.btn-red{
  background-color: red;
  color: #fff
  }

</style>