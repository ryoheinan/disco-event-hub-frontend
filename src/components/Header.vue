<template>
  <header>
    <div class="container mx-auto pt-4 pb-16 px-5">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img src="../assets/img/logo.svg" class="logo" />
        </router-link>
        <login-btn v-if="isLoginBtn" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import LoginBtn from './LoginBtn.vue'
  export default defineComponent({
    name: 'Header',
    components: {
      LoginBtn,
    },
    props: {
      isLoginBtn: {
        type: Boolean,
        default: true,
        required: false,
      },
    },
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
