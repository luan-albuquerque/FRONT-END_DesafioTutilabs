<template>
<div>
  <SideBar/>
 <NavBar/>
  <main>
 <slot>
 </slot>
</main>
</div>
</template>

<script>
import SideBar from "../components/SideBar/SideBar.vue"
import NavBar from '../components/NavBar/NavBar.vue'


export default {
  components:{ NavBar, SideBar}
}
</script>

<style>
main{
  margin-top: 70px;
}
 @media (min-width: 768px)
  {
   main{
      margin-left: 16%;
     }
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