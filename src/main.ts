import { createApp } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import { router } from './router'
import App from './App.vue'
import authStore, { authStoreKey } from './stores/auth'
import './assets/css/index.css'

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

firebase.initializeApp(config)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

const app = createApp(App)
app.use(router)
app.provide(authStoreKey, authStore())
app.mount('#app')
