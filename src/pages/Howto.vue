<template>
  <Header :is-howto="false" />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-10">初めての方へ</h1>
        <section class="text-white mb-10">
          <h2 class="text-3xl mb-2">このサイトについて</h2>
          <p>
            Disco Event Hubは、サークルなどのDiscord上で行われるイベントを<br />
            外部にSNSなどで共有することができるサイトです。
          </p>
        </section>
        <section class="text-white mb-10">
          <h2 class="text-3xl mb-2">使い方</h2>
          <p class="mb-5">
            まずは、Disco Event Botをあなたの
            Discordサーバーに追加してください。<br />
            （チャンネル管理の権限が必要となります）
          </p>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=852174545024843806&permissions=16&scope=bot"
            class="
              btn-bot
              py-2
              px-4
              font-semibold
              rounded-lg
              focus:outline-none
            "
            target="_blank"
            >Disco Event Botの追加</a
          >
          <p class="mt-10 mb-5">
            イベントを開催したいサーバー上で「/event」と打つと、<br />
            作成画面へのリンクが表示され、サイト上で作成することができます。
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from '../components/Header.vue'

  export default defineComponent({
    name: 'Howto',
    components: {
      Header,
    },
  })
</script>

<style scoped>
  .btn-bot {
    background-color: #5865f2;
    color: #fff;
    cursor: pointer;
  }
  .btn-bot:hover,
  .btn-bot:active {
    background-color: #4a56cf;
    color: #fff;
  }
</style>
