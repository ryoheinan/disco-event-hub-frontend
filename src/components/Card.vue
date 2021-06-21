<template>
  <div class="card rounded-lg">
    <!-- :style="colorStyle -->
    <div class="pb-10">
      <div class="flex justify-center py-4 px-8">
        <div class="pt-3 bg-white text-4xl w-14 h-14 rounded-lg">
          {{ emoji }}
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-2xl font-bold">{{ title }}</div>
        <div class="text-1xl font-bold pb-3">@{{ serverName }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Card',
    props: {
      color: {
        //背景色と文字色の組み合わせをobjectで指定する
        type: String,
        required: true,
      },
      emoji: {
        type: String,
        required: true,
        default: '🎉',
      },
      title: {
        type: String,
        required: true,
        default: 'title',
      },
      serverName: {
        type: String,
        required: true,
        default: 'title',
      },
    },
    setup: () => {
      const count = ref(0)
      return { count }
    },
  })
</script>

<style scoped>
  .card {
    background-color: #5865f2;
    color: #1a1a1a;
  }
</style>
