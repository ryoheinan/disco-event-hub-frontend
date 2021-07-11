<template>
  <Header />
  <main class="content-bg">
    <div class="container mx-auto px-5">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-16 lg:gap-y-12"
      >
        <Card
          v-for="item in state.data"
          :key="item.id"
          :url="`/detail/${item.id}`"
          :color="item.color"
          :emoji="item.emoji"
          :title="item.eventName"
          :server-name="item.serverName"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue'
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import Header from '../components/Header.vue'
  import Card from '../components/Card.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Header,
      Card,
    },
    setup() {
      const db = firebase.firestore()
      const recvData: any[] = []

      const state = reactive({
        data: null as any,
      })

      const getData = async () => {
        db.collection('events')
          .get()
          .then((query) => {
            query.forEach((doc) => {
              let data = doc.data()
              recvData.push({
                id: doc.id,
                eventName: data.name,
                serverName: data.serverName,
                emoji: data.emoji,
                color: data.color,
              })
            })
            return recvData
          })
          .then((data) => {
            state.data = data
          })
          .catch(() => {
            alert('データの取得に失敗しました')
          })
      }

      onMounted(() => {
        getData()
      })

      return { state, getData }
    },
  })
</script>

<style scoped>
  .card {
    transition: ease-in-out 0.25s;
  }
  .card:hover {
    transform: translate(0, -7px);
  }
</style>
