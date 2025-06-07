import { createRouter, createWebHistory } from 'vue-router'


// Zadatak 1 - SolarSystem
import SolarSystemView from '@/views/solarSystem/SolarSystemView.vue'
import PlanetView from '@/views/solarSystem/PlanetView.vue'
import MoonView from '@/views/solarSystem/MoonView.vue'

const router_zadatak_1 = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/solarsystem',
        },
        {
            path: '/solarsystem',
            component: SolarSystemView,
        },
        {
            path: '/solarsystem/:planet',
            component: PlanetView,
            props: true,
        },
        {
            path: '/solarsystem/:planet/:satellite',
            component: MoonView,
            props: true
        }
    ]
})


// Zadatak 2 - MaliDucan
import ShopView from '@/views/maliDucan/ShopView.vue'
import CartView from '@/views/maliDucan/CartView.vue'
import AdminView from '@/views/maliDucan/AdminView.vue'
import AddProductView from '@/views/maliDucan/AddProductView.vue'
import { compile } from 'vue'

const router_zadatak_2 = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/shop',
            component: ShopView,
        },
        {
            path: '/cart',
            component: CartView,
        },
        {
            path: '/admin',
            component: AdminView,
        },
        {
            path: '/admin/add',
            component: AddProductView
        } 
    ]
})

// birate koji router koristite
export default router_zadatak_1
// export default router_zadatak_2