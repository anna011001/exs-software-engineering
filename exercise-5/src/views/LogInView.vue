<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const store = useUserStore()
const router = useRouter()

function login() {
  const success = store.login(email.value, password.value)
  if (!success) {
    alert('Pogrešan email ili lozinka')
  } else {
    router.push('/user')
  }
}
</script>

<template>
  <h1>Prijava</h1>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Lozinka" required />
    <button type="submit">Prijava</button>
  </form>
  <p>
  <router-link to="/signup">Registracija</router-link>
  </p>
</template>