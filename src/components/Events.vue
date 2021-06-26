<template>
  <div class="cards">
    <div class="container mx-auto px-5">
      <Card color="blurple" emoji="😎" title="Hello" server-name="Hello" />
    </div>
  </div>
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

<style scoped>
  .cards {
    background-color: #eaeaea;
    background: linear-gradient(
      180deg,
      #eaeaea 0%,
      #eaeaea 5rem,
      #2c2e31 5rem,
      #2c2e31 100%
    );
    height: 10rem;
  }
</style>
