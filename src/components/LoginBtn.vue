<template>
  <div v-if="state.isLoggedin">
    <button
      type="button"
      class="py-2 px-4 text-white font-semibold rounded-lg focus:outline-none"
      @click="signout()"
    >
      Sign out
    </button>
  </div>
  <div v-else class="user">
    <button
      type="button"
      class="py-2 px-4 text-white font-semibold rounded-lg focus:outline-none"
      @click="signin()"
    >
      Sign in
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useAuthStore } from '../stores/auth'

  export default defineComponent({
    name: 'LoginBtn',
    setup() {
      const { signin, signout, state } = useAuthStore()
      return {
        state,
        signin,
        signout,
      }
    },
  })
</script>

<style scoped>
  button {
    background-color: #5865f2;
  }
  button:active {
    background-color: #454fbe;
  }
</style>
