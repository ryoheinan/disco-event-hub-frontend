<template>
  <Header />
  <main class="content-bg">
    <Events />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Events from '../components/Events.vue'
  import Header from '../components/Header.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Header,
      Events,
    },
  })
</script>

<style scoped></style>
