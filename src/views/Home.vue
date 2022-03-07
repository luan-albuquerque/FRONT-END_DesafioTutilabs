<template>
  <Layout>
     <main>
     <p>Bem Vindo {{user}} ao Sistema de Controle de Colaboradores e Departamentos.</p>

     </main>
  </Layout>
</template>

<script>
import Layout from "../views/Layout.vue" 

export default {
components : {
  Layout
  },
  data(){
    return {
      user : ""
    }
  },
created(){
  this.user = sessionStorage.getItem("user")
}
 
}
</script>

<style>
main {
  padding: 40px;
}
</style>