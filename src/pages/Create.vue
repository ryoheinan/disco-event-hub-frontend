<template>
  <Header :is-login-btn="state.isLoggedin" />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div
        v-if="!$route.query.invite || !$route.query.guild"
        class="text-center"
      >
        <h1 class="text-6xl font-bold mb-10">Invalid URL</h1>
        <p class="text-white">無効なURLです</p>
      </div>
      <div v-else-if="state.isLoggedin" class="card rounded-lg p-5">
        <div class="container mx-auto">
          <p class="text-lg font-bold">Discordサーバー名</p>
          <p class="text-base mb-5">
            {{ $route.query.guild }}
          </p>
          <p class="text-lg font-bold">Discordサーバーの招待リンク</p>
          <p class="text-base mb-5">
            https://discord.gg/{{ $route.query.invite }}
          </p>
          <label class="block mb-5">
            <span>イベント名</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
              placeholder="例）ゲームやる会"
            />
          </label>
          <label class="block mb-5">
            <span>イベントの説明</span>
            <textarea
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
              placeholder="例）ゲームやる会"
            >
            </textarea>
          </label>
          <label class="block mb-5">
            <span>絵文字</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
              placeholder="例）ゲームやる会"
            />
          </label>
          <label class="block mb-5">
            <span>イベント開始日</span>
            <input
              type="date"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
            />
          </label>
          <label class="block mb-5">
            <span>イベント開始時間</span>
            <input
              type="time"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
            />
          </label>
        </div>
      </div>
      <div v-else class="text-center">
        <h1 class="text-6xl font-bold mb-10">Sign in</h1>
        <button
          type="button"
          class="py-2 px-4 font-semibold rounded-lg focus:outline-none"
          @click="signin()"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useAuthStore } from '../stores/auth'

  import Header from '../components/Header.vue'
  export default defineComponent({
    name: 'Create',
    components: {
      Header,
    },
    setup: () => {
      const { signin, state } = useAuthStore()
      return {
        signin,
        state,
      }
    },
  })
</script>

<style scoped>
  .emoji {
    font-size: 6rem;
  }
  input {
    color: #1a1a1a;
  }
  .card {
    background-color: #5865f2;
    color: #ffffff;
  }
  button {
    background-color: #ffffff;
    color: #1a1a1a;
  }
  button:active {
    background-color: #cecece;
  }
</style>
