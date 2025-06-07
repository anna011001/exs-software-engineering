<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const oldPassword = ref('')
const newPassword = ref('')
const deletePassword = ref('')

function logout() {
  store.logout()
  router.push('/login')
}

function changePassword() {
  const success = store.changePassword(oldPassword.value, newPassword.value)
  if (!success) {
    alert('Pogrešna lozinka')
  } else {
    alert('Lozinka promijenjena. Ponovno se prijavite.')
    router.push('/login')
  }
}

function deleteAccount() {
  const success = store.deleteAccount(deletePassword.value)
  if (!success) {
    alert('Pogrešna lozinka')
  } else {
    alert('Račun obrisan')
    router.push('/login')
  }
}
</script>

<template>
  <h1>Korisnik: {{ store.currentUser.username }}</h1>

  <h2>Promijeni lozinku</h2>
  <form @submit.prevent="changePassword">
    <input v-model="oldPassword" type="password" placeholder="Stara lozinka" required />
    <input v-model="newPassword" type="password" placeholder="Nova lozinka" required />
    <button type="submit">Promijeni lozinku</button>
  </form>

  <h2>Obriši račun</h2>
  <form @submit.prevent="deleteAccount">
    <input v-model="deletePassword" type="password" placeholder="Unesi lozinku" required />
    <button type="submit">Obriši račun</button>
  </form>

  <button @click="logout">Odjava</button>
</template>