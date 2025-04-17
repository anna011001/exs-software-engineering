<script setup>
import { ref, computed } from 'vue'

const images = {
  "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
  "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
  "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
  "Kruh": "https://www.svgrepo.com/show/530223/bread.svg",
}

const products = [
  { name: "Jabuka", price: 0.25 },
  { name: "Mrkva", price: 0.12 },
  { name: "Kruh", price: 2.00 },
  { name: "Sir", price: 4.48 }
]

const user = ref({
  isAdmin: true,
  personal_info: {
    name: "Marko Krivić",
    address: {
      city: "Pula",
      street: "Veruda",
      number: 32
    },
    phone_number: "+091-123-456"
  },
  cart: [
    { name: "Jabuka", quantity: 4 },
    { name: "Mrkva", quantity: 6 },
    { name: "Sir", quantity: 1 },
    { name: "Kruh", quantity: 3 }
  ]
})

const getPrice = (name) => {
  const p = products.find(el => el.name === name)
  return p ? p.price : 0
}

const mostExpensiveItem = computed(() => {
  let max = 0
  let name = ""
  user.value.cart.forEach(item => {
    const total = getPrice(item.name) * item.quantity
    if (total > max) {
      max = total
      name = item.name
    }
  })
  return name
})

const totalPrice = computed(() =>
  user.value.cart.reduce(
    (total, item) => total + getPrice(item.name) * item.quantity, 0
  ).toFixed(2)
)

const getStyleFor = (name) => {
  return name === mostExpensiveItem.value ? 'text-red-500 border-1 border-red-600 bg-red-50' : ''
}

const getCount = (name) => {
  const item = user.value.cart.find(item => item.name === name)
  return item ? item.quantity : 0
}
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 p-6 space-y-8">
    <div :class="user.isAdmin ? 'text-blue-500' : 'text-black'" class="text-lg border-blue-100 border rounded-xl p-4 bg-blue-50">
      <h1 class="text-2xl text-blue-500 mb-4 font-semibold">Korisnički podaci</h1>
      <hr class="bg-blue opacity-40 mb-2" />
      <p><b>Ime:</b> {{ user.personal_info.name }}</p>
      <p><b>Adresa:</b> {{ user.personal_info.address.street }} {{ user.personal_info.address.number }}, {{ user.personal_info.address.city }}</p>
      <p><b>Telefon:</b> {{ user.personal_info.phone_number }}</p>
    </div>

    <div class="border-blue-100 border rounded-xl p-4 bg-blue-50">
      <h2 class="text-2xl font-semibold mb-4">Košarica</h2>

      <div class="space-y-4">
        <div :class="getStyleFor('Jabuka')" class="flex md:flex-row items-center md:space-x-4 bg-gray-100 p-4 rounded-xl border-1 border-gray-400 gap-4">
          <img :src="images['Jabuka']" class="w-16 h-16" />
          <div>
            <p><b>Jabuka</b></p>
            <p>Cijena: €{{ getPrice('Jabuka').toFixed(2) }} | Količina: {{ getCount('Jabuka') }}</p>
            <p>Ukupno: €{{ (getPrice('Jabuka') * getCount('Jabuka')).toFixed(2) }}</p>
          </div>
        </div>

        <div :class="getStyleFor('Mrkva')" class="flex md:flex-row items-center md:space-x-4 bg-gray-100 p-4 rounded-xl border-1 border-gray-400 gap-4">
          <img :src="images['Mrkva']" class="w-16 h-16" />
          <div>
            <p><b>Mrkva</b></p>
            <p>Cijena: €{{ getPrice('Mrkva').toFixed(2) }} | Količina: {{ getCount('Mrkva') }}</p>
            <p>Ukupno: €{{ (getPrice('Mrkva') * getCount('Mrkva')).toFixed(2) }}</p>
          </div>
        </div>

        <div :class="getStyleFor('Sir')" class="flex md:flex-row items-center md:space-x-4 bg-gray-100 p-4 rounded-xl border-1 border-gray-400 gap-4">
          <img :src="images['Sir']" class="w-16 h-16" />
          <div>
            <p><b>Sir</b></p>
            <p>Cijena: €{{ getPrice('Sir').toFixed(2) }} | Količina: {{ getCount('Sir') }}</p>
            <p>Ukupno: €{{ (getPrice('Sir') * getCount('Sir')).toFixed(2) }}</p>
          </div>
        </div>

        <div :class="getStyleFor('Kruh')" class="flex md:flex-row items-center md:space-x-4 bg-gray-100 p-4 rounded-xl border-1 border-gray-400 gap-4">
          <img :src="images['Kruh']" class="w-16 h-16" />
          <div>
            <p><b>Kruh</b></p>
            <p>Cijena: €{{ getPrice('Kruh').toFixed(2) }} | Količina: {{ getCount('Kruh') }}</p>
            <p>Ukupno: €{{ (getPrice('Kruh') * getCount('Kruh')).toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <div class="text-xl text-left mt-6">
        <span class="font-bold">Ukupna cijena:</span> €{{ totalPrice }}
      </div>
    </div>
  </div>
</template>