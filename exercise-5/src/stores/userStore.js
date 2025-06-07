import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const users = ref([])
  const currentUser = ref(null)

  function register(username, email, password) {
    if (users.value.some(u => u.username === username || u.email === email)) return false
    const newUser = { username, email, password }
    users.value.push(newUser)
    currentUser.value = newUser
    return true
  }

  function login(email, password) {
    const found = users.value.find(u => u.email === email && u.password === password)
    if (!found) return false
    currentUser.value = found
    return true
  }

  function logout() {
    currentUser.value = null
  }

  function changePassword(oldPassword, newPassword) {
    if (!currentUser.value || currentUser.value.password !== oldPassword) return false
    const index = users.value.findIndex(u => u.email === currentUser.value.email)
    if (index !== -1) users.value[index].password = newPassword
    logout()
    return true
  }

  function deleteAccount(password) {
    if (!currentUser.value || currentUser.value.password !== password) return false
    users.value = users.value.filter(u => u.email !== currentUser.value.email)
    logout()
    return true
  }

  return {
    users,
    currentUser,
    register,
    login,
    logout,
    changePassword,
    deleteAccount
  }
})
