<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const store = useUserStore()
const router = useRouter()

function register() {
  if (password.value !== confirmPassword.value) {
    alert('Lozinke se ne podudaraju')
    return
  }
  const success = store.register(username.value, email.value, password.value)
  if (!success) {
    alert('Korisnik već postoji')
  } else {
    router.push('/user')
  }
}
</script>

<template>
  <h1>Registracija</h1>
  <form @submit.prevent="register">
    <input v-model="username" placeholder="username" required />
    <input v-model="email" type="email" placeholder="email" required />
    <input v-model="password" type="password" placeholder="lozinka" required />
    <input v-model="confirmPassword" type="password" placeholder="ponovi lozinku" required />
    <button type="submit">Registracija</button>
  </form>
  <p>
    <router-link to="/login">Prijava</router-link>
  </p>
</template>