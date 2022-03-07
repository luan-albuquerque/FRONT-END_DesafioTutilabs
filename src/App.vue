
<template>
  <div class="content">
      <router-view />
  </div>
</template>

<script>
import Home from "./views/Home.vue"
export default {
  components:{Home}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

</style>
