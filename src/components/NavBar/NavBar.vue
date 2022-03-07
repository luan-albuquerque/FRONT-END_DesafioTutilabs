<template>
  <div class="header">
<nav class="flex">

    <div>
        <h3> Sistema de Controle de Colaboradores </h3>
    </div>
     <div>
        <button class="logout" @click="logout">
          Logout
        </button>
    </div>
</nav>
</div>

</template>

<script>
export default {
methods:{
  logout(){

    
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
 
  this.$swal.fire({
  title: 'Tem certeza que realizar Logout?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim'
}).then(async (result) => {

  sessionStorage.clear();
    this.$router.push({
      path:"/login"
    })

           Toast.fire({
          icon: "info",
          title: "Logout realizado!",
        });
 
 })
  }
}
}
</script>

<style>
.flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 82%;
}
.logout:hove{
    color: #94ba65;

}
.header{
    position: fixed;
    width: 100%;
    height: 70px;
   
    transition: 0.5s;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 0.1rem 0.2rem rgb(156 156 156);
    z-index: 10;
    color: #94ba65;

}

  @media (min-width: 768px)
  {
    .header{
 margin-left: 16%;
    }
    
    }


</style>