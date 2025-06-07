<script setup>
import { useDucanStore} from '@/stores/ducanStore';

const ducanStore = useDucanStore();

function ukupnaCijena() {
    let suma = 0;

    for (const proizvod of ducanStore.cart) {
        suma += proizvod.price;
    }
      return suma;
  }

</script>

<template>
    <h1>Košarica:</h1>
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <div v-for="(proizvod, index) in ducanStore.cart"
            style="border: 1px solid black; padding: 4px;">
            <img :src="proizvod.image" height="50">
            <br/>
            Naziv: <b>{{ proizvod.name }}</b>
            <br/>
            Cijena: <b>{{ proizvod.price }} €</b>
            <br/>
            <button @click="ducanStore.removeFromCart(index)">Ukloni</button>
        </div>
    </div>
    
    <div style="margin-top: 16px;">
        Ukupna cijena: <b>{{ ukupnaCijena().toFixed(2) }} €</b>
    </div>

</template>