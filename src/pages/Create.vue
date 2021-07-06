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
          <div class="mb-5">
            <button
              class="bg-white text-6xl flex items-center p-5 rounded-lg"
              @click="toggleVisible"
            >
              {{ emojiOutput }}
              <span class="text-2xl ml-2 text-gray-700">絵文字の変更</span>
            </button>
            <div v-if="isVisible" class="ml-0 mt-2">
              <Picker
                :data="emojiIndex"
                :native="true"
                title=""
                @select="showEmoji"
              />
            </div>
          </div>
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
            ></textarea>
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
  import { defineComponent, ref } from 'vue'
  import { useAuthStore } from '../stores/auth'
  import data from 'emoji-mart-vue-fast/data/all.json'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import { Picker, EmojiIndex } from 'emoji-mart-vue-fast/src'
  import 'emoji-mart-vue-fast/css/emoji-mart.css'
  import Header from '../components/Header.vue'

  interface EmojiData {
    id: string
    name: string
    colons: string
    emoticons: string[]
    unified: string
    skin: number
    native: string
  }

  const emojiIndex = new EmojiIndex(data)
  export default defineComponent({
    name: 'Create',
    components: {
      Header,
      Picker,
    },
    setup: () => {
      const { signin, state } = useAuthStore()
      const emojiOutput = ref('😀') //リアクティブにする
      const isVisible = ref(false)
      const showEmoji = (emoji: EmojiData) => {
        emojiOutput.value = emoji.native
      }
      const toggleVisible = () => {
        isVisible.value = !isVisible.value
      }
      return {
        signin,
        state,
        emojiIndex,
        showEmoji,
        emojiOutput,
        isVisible,
        toggleVisible,
      }
    },
  })
</script>

<style scoped>
  .emoji {
    font-size: 6rem;
  }
  input,
  textarea {
    color: #1a1a1a;
  }
  textarea {
    min-height: 6rem;
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
