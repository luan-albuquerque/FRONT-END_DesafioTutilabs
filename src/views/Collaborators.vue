<template>
 <Layout>
  <div class="mw-flex">
   <div class="mw-flex-fs">
    <h2>Colaboradores</h2>
    </div>
      <div class="button-create">
       <button class="btn btn-black" @click="() => this.$router.push({ 
          name: 'collaboratorCreate' })" >
           Criar Colaborador
          </button>
    </div>
    <div class="main-table">
      <TableCollaborators/>
    </div>
 </div>
  </Layout>
</template>

<script>
import Layout from "../views/Layout.vue" 
import TableCollaborators from "../components/TableCollaborators/TableCollaborators.vue"
export default {
components : {
  TableCollaborators,Layout
},
}
</script>


<style>
.button-create{
  display: flex;
  justify-content: flex-start;
  width: 50%;
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
.mw-flex{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.mw-flex-fs{
  display: flex;
  margin-top: 2%;

}

.main-table{
  display: flex;
  width: 50%;
  justify-content: center;
}
</style>