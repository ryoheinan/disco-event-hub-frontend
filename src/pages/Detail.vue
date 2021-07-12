<template>
  <Header />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div
        v-if="state.data"
        class="card text-center rounded-lg p-5"
        :style="{
          backgroundColor: colorSet[state.data.color].bg,
          color: colorSet[state.data.color].text,
        }"
      >
        <div class="pb-5">
          <div class="flex justify-center mb-5">
            <div class="emoji bg-white w-40 h-40 rounded-lg">
              {{ state.data.emoji }}
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-4xl font-bold mb-1">{{ state.data.name }}</p>
            <p class="text-2xl mb-1">@{{ state.data.serverName }}</p>
            <p class="mb-4 font-bold">
              {{ state.data.startDate }} {{ state.data.startTime }} 開始
            </p>
            <div>
              <p
                class="
                  mb-2
                  px-3
                  py-4
                  inline-block
                  bg-white
                  rounded-lg
                  description
                "
                style="white-space: pre-wrap"
              >
                {{ state.data.description }}
              </p>
            </div>
            <div class="text-center mt-10">
              <a
                class="inline-block btn-join py-2 px-4 font-semibold rounded-lg"
                :href="`https://discord.gg/${state.data.inviteUrl}`"
                target="_blank"
                >サーバーにアクセスして<br />参加する</a
              >
            </div>
            <div class="text-center">
              <a
                class="inline-block w-20 h-20 mt-20"
                :href="`https://twitter.com/share?url=https://disco-event-hub.web.app/detail/${$route.params.id}/&text=${state.data.name}に参加しよう！ - Disco Event Hub`"
                rel="noopener noreferrer nofollow"
                target="_blank"
                ><img src="../assets/img/twitter.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import Header from '../components/Header.vue'
  export default defineComponent({
    name: 'Detail',
    components: {
      Header,
    },
    setup: () => {
      const route = useRoute()
      const colorSet = {
        blurple: { bg: '#5865F2', text: '#ffffff' },
        green: { bg: '#57F287', text: '#1A1A1A' },
        yellow: { bg: '#FEE75C', text: '#1A1A1A' },
        fuchsia: { bg: '#EB459E', text: '#ffffff' },
        red: { bg: '#ED4245', text: '#ffffff' },
      }

      const db = firebase.firestore()

      const state = reactive({
        data: null as any,
      })

      const getData = async () => {
        db.collection('events')
          .doc(route.params.id as string)
          .get()
          .then((query) => {
            const data = query.data()
            state.data = data
          })
          .catch(() => {
            alert('データの取得に失敗しました')
          })
      }

      onMounted(() => {
        getData()
      })

      return { state, getData, colorSet }
    },
  })
</script>

<style scoped>
  .emoji {
    font-size: 6.5rem;
  }
  .btn-join {
    background-color: #1a1a1a;
    color: #ffffff;
  }
  .btn-join:hover,
  .btn-join:active {
    background-color: #3a3a3a;
  }
  .description {
    color: #1a1a1a;
  }
</style>
