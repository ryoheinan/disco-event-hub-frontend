<template>
  <div
    class="card text-center rounded-lg"
    :style="{
      backgroundColor: colorSet[color].bg,
      color: colorSet[color].text,
    }"
  >
    <div class="pb-10">
      <div class="flex justify-center py-4 px-8">
        <div class="pt-3 bg-white text-6xl w-20 h-20 rounded-lg">
          {{ emoji }}
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-4xl font-bold pb-1">{{ title }}</div>
        <div class="text-2xl pb-3">@{{ serverName }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  export default defineComponent({
    name: 'Card',
    props: {
      color: {
        //背景色と文字色の組み合わせをobjectで指定する
        type: String as PropType<
          'blurple' | 'green' | 'yellow' | 'fuchsia' | 'red'
        >,
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
      const colorSet = {
        blurple: { bg: '#5865F2', text: '#ffffff' },
        green: { bg: '#57F287', text: '#1A1A1A' },
        yellow: { bg: '#FEE75C', text: '#1A1A1A' },
        fuchsia: { bg: '#EB459E', text: '#ffffff' },
        red: { bg: '#ED4245', text: '#ffffff' },
      }
      return { colorSet }
    },
  })
</script>

<style scoped>
  .card {
    height: 20rem;
  }
</style>
