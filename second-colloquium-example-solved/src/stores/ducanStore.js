import { defineStore } from 'pinia'
import proizvodiData from '@/data/proizvodiData.js'
import { ref } from 'vue'

export const useDucanStore = defineStore('ducanStore', () => {
    const products = ref(proizvodiData.proizvodi)

    const cart = ref([])

    function addToCart(product) {
        cart.value.push(product)
    }

    function removeFromCart(index) {
        cart.value.splice(index, 1);
    }

    function addProduct(product) {
        products.value.push(product)
    }

    function removeProduct(index) {
        products.value.splice(index, 1);
    }

    return {
        products,
        cart,
        addToCart,
        removeFromCart,
        addProduct,
        removeProduct
    }
})