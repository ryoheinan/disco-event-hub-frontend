<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
  })
</script>

<style>
  body {
    background-color: #2c2e31;
    font-family: 'Helvetica Neue', Roboto, 'Segoe UI', Arial,
      'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Noto Sans CJK JP',
      'BIZ UDPGothic', '游ゴシック', 'YuGothic', 'Hiragino Sans', Meiryo,
      sans-serif !important;
    font-weight: 500;
  }
</style>
