<template>
  <Header />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div class="card text-center rounded-lg p-5" :style="colorObj">
        <div class="pb-10">
          <div class="flex justify-center mb-5">
            <div class="emoji bg-white w-40 h-40 rounded-lg">👩‍💻</div>
          </div>
          <div class="flex flex-col">
            <div class="text-5xl font-bold pb-1">Hello</div>
            <div class="text-2xl pb-3">@{{ serverName }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import Header from '../components/Header.vue'
  export default defineComponent({
    name: 'Detail',
    components: {
      Header,
    },
    setup: () => {
      const colorSet = {
        blurple: { bg: '#5865F2', text: '#ffffff' },
        green: { bg: '#57F287', text: '#1A1A1A' },
        yellow: { bg: '#FEE75C', text: '#1A1A1A' },
        fuchsia: { bg: '#EB459E', text: '#ffffff' },
        red: { bg: '#ED4245', text: '#ffffff' },
      }
      const colorObj = reactive({
        backgroundColor: colorSet.blurple.bg,
        color: colorSet.blurple.text,
      })
      return { colorObj }
    },
  })
</script>

<style scoped>
  .emoji {
    font-size: 6rem;
  }
</style>
