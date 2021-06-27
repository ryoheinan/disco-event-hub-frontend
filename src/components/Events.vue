<template>
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-16 lg:gap-y-12"
      >
        <Card color="blurple" emoji="😎" title="Hello" server-name="Hello" />
        <Card color="fuchsia" emoji="🎬" title="Hello" server-name="Hello" />
        <Card color="green" emoji="🎮" title="Hello" server-name="Hello" />
        <Card color="green" emoji="👩‍💻" title="Hello" server-name="Hello" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Card from '../components/Card.vue'
  export default defineComponent({
    name: 'Events',
    components: {
      Card,
    },
  })
</script>
