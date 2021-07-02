<template>
  <Header :is-login-btn="state.isLoggedin" />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div v-if="state.isLoggedin" class="card rounded-lg p-5">
        <div class="container mx-auto">
          <label class="block mb-5">
            <span>イベント名</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-transparent
                focus:bg-white focus:ring-0
              "
              placeholder="例）ゲームやる会"
            />
          </label>
          <label class="block mb-5">
            <span>Discordサーバー名</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-transparent"
              placeholder="例）ゲーム同好会"
            />
          </label>
          <label class="block mb-5">
            <span>Discordサーバーの招待コード</span>
            <input
              type="url"
              class="mt-1 block w-full rounded-md border-transparent"
              placeholder="例）https://discord.gg/xxxyyyzzz"
            />
          </label>
          <label class="block mb-5">
            <span>イベント開始日</span>
            <input
              type="date"
              class="mt-1 block w-full rounded-md border-transparent"
            />
          </label>
          <label class="block mb-5">
            <span>イベント開始時間</span>
            <input
              type="time"
              class="mt-1 block w-full rounded-md border-transparent"
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
