<template>
  <header>
    <div class="container mx-auto pt-4 pb-16 px-5">
      <div class="flex justify-between items-center">
        <img src="../assets/img/logo.svg" class="logo" />
        <img src="../assets/img/menu.svg" class="menu" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Header',
  })
</script>

<style scoped>
  header {
    background-color: #eaeaea;
  }
  .logo {
    height: 5rem;
  }
  .menu {
    height: 2rem;
  }
</style>
