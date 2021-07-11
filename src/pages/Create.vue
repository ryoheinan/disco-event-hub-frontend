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
      <div
        v-else-if="state.isLoggedin"
        class="card rounded-lg p-5"
        :style="{
          backgroundColor: colorSet[formData.color].bg,
          color: colorSet[formData.color].text,
        }"
      >
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
              v-model="formData.name"
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
              default
            />
          </label>
          <label class="block mb-5">
            <span>イベントの説明</span>
            <textarea
              v-model="formData.description"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
              placeholder="例）ゲームやる会"
              default
            ></textarea>
          </label>
          <div class="mb-5">
            <p>テーマカラー</p>
            <input
              id="blurple"
              v-model="formData.color"
              type="radio"
              name="color"
              class="hidden"
              value="blurple"
            />
            <label for="blurple" class="inline-block color-box blurple-box"
              ><div class="flex items-center">
                <span class="circle mr-2"></span> Blurple
              </div></label
            >
            <input
              id="green"
              v-model="formData.color"
              type="radio"
              name="color"
              class="hidden"
              value="green"
            />
            <label for="green" class="inline-block color-box green-box"
              ><div class="flex items-center">
                <span class="circle mr-2"></span> Green
              </div></label
            >
            <input
              id="yellow"
              v-model="formData.color"
              type="radio"
              name="color"
              class="hidden"
              value="yellow"
            />
            <label for="yellow" class="inline-block color-box yellow-box"
              ><div class="flex items-center">
                <span class="circle mr-2"></span> Yellow
              </div></label
            >
            <input
              id="fuchsia"
              v-model="formData.color"
              type="radio"
              name="color"
              class="hidden"
              value="fuchsia"
            />
            <label for="fuchsia" class="inline-block color-box fuchsia-box"
              ><div class="flex items-center">
                <span class="circle mr-2"></span> Fuchsia
              </div></label
            >
            <input
              id="red"
              v-model="formData.color"
              type="radio"
              name="color"
              class="hidden"
              value="red"
            />
            <label for="red" class="inline-block color-box red-box"
              ><div class="flex items-center">
                <span class="circle mr-2"></span> Red
              </div></label
            >
          </div>
          <label class="block mb-5">
            <span>イベント開始日</span>
            <input
              v-model="formData.startDate"
              type="date"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
              default
            />
          </label>
          <label class="block mb-5">
            <span>イベント開始時間</span>
            <input
              v-model="formData.startTime"
              type="time"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-2 border-transparent
                focus:border-black
              "
              default
            />
          </label>
          <button
            type="button"
            class="
              py-2
              px-4
              font-semibold
              rounded-lg
              focus:outline-none
              btn-create
            "
            @click="addData()"
          >
            Create
          </button>
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
  import { defineComponent, ref, reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import firebase from 'firebase/app'
  import 'firebase/firestore'
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

  interface Form {
    name: string
    description: string
    color: 'blurple' | 'green' | 'yellow' | 'fuchsia' | 'red'
    startDate: string
    startTime: string
  }

  const emojiIndex = new EmojiIndex(data)
  export default defineComponent({
    name: 'Create',
    components: {
      Header,
      Picker,
    },
    setup: () => {
      const router = useRouter()
      const route = useRoute()
      const { signin, state } = useAuthStore()
      const emojiOutput = ref('😀')
      const isVisible = ref(false)
      const showEmoji = (emoji: EmojiData) => {
        emojiOutput.value = emoji.native
      }
      const toggleVisible = () => {
        isVisible.value = !isVisible.value
      }
      const formData = reactive<Form>({
        name: '',
        description: '',
        color: 'blurple',
        startDate: '',
        startTime: '',
      })
      const colorSet = {
        blurple: { bg: '#5865F2', text: '#ffffff' },
        green: { bg: '#57F287', text: '#1A1A1A' },
        yellow: { bg: '#FEE75C', text: '#1A1A1A' },
        fuchsia: { bg: '#EB459E', text: '#ffffff' },
        red: { bg: '#ED4245', text: '#ffffff' },
      }
      const db = firebase.firestore()
      const addData = () => {
        db.collection('events')
          .add({
            serverName: route.query.guild,
            inviteUrl: route.query.invite,
            name: formData.name,
            description: formData.description,
            emoji: emojiOutput.value,
            color: formData.color,
            startDate: formData.startDate,
            startTime: formData.startTime,
            timestamp: firebase.firestore.Timestamp.now(),
          })
          .then(() => {
            alert('作成完了！')
            router.push('/') //detailに移動予定
          })
          .catch(() => {
            alert('保存に失敗しました')
          })
      }

      return {
        signin,
        state,
        emojiIndex,
        showEmoji,
        emojiOutput,
        isVisible,
        toggleVisible,
        addData,
        formData,
        colorSet,
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
  button {
    background-color: #ffffff;
    color: #1a1a1a;
  }
  button:active {
    background-color: #cecece;
  }
  .color-box {
    background-color: #ffffff;
    color: #1a1a1a;
    margin: 0.5rem 1rem 0.5rem 0;
    padding: 1.25rem;
    font-weight: 700;
    border: solid 3px #ffffff;
    border-radius: 0.25rem;
    cursor: pointer;
    min-width: 6rem;
  }
  #blurple:checked ~ .blurple-box,
  #green:checked ~ .green-box,
  #yellow:checked ~ .yellow-box,
  #fuchsia:checked ~ .fuchsia-box,
  #red:checked ~ .red-box {
    border: solid 3px #1a1a1a;
  }
  .circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .blurple-box .circle {
    background-color: #5865f2;
  }
  .green-box .circle {
    background-color: #57f287;
  }
  .yellow-box .circle {
    background-color: #fee75c;
  }
  .fuchsia-box .circle {
    background-color: #eb459e;
  }
  .red-box .circle {
    background-color: #ed4245;
  }
  .btn-create {
    border: solid 2px #1a1a1a;
  }
</style>
