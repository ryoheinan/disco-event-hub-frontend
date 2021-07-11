<template>
  <Header />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-10">404 Not found</h1>
        <p class="text-white mb-6">お探しのページは見つかりませんでした</p>
        <router-link
          to="/"
          class="btn-home py-2 px-4 font-semibold rounded-lg focus:outline-none"
          >Homeへ戻る</router-link
        >
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from '../components/Header.vue'

  export default defineComponent({
    name: 'Error',
    components: {
      Header,
    },
  })
</script>

<style scoped>
  .btn-home {
    background-color: #5865f2;
    color: #fff;
  }
  .btn-home:hover,
  .btn-home:active {
    background-color: #4a56cf;
    color: #fff;
  }
</style>
