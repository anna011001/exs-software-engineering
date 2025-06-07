import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import UserView from '../views/UserView.vue'
import { useUserStore } from '../stores/userStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: LogInView },
    { path: '/signup', name: 'SignUp', component: SignUpView },
    { path: '/user', name: 'User', component: UserView },
  ]
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.name === 'User' && !store.currentUser) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
