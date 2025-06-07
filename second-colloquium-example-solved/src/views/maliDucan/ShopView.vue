<script setup>
import { useDucanStore} from '@/stores/ducanStore';
const ducanStore = useDucanStore();
</script>

<template>
    <h1>Trgovina:</h1>
    <div style="display: flex; flex-wrap: wrap; gap : 16px;">
      <div v-for="proizvod in ducanStore.products"
          style="border: 1px solid black; padding: 4px;">
          <img :src="proizvod.image" height="50">
          <br>
          Naziv: <b>{{ proizvod.name }}</b>
          <br>
          Cijena: <b>{{ proizvod.price }} € </b>
          <br>
          <button @click="ducanStore.addToCart(proizvod)">Dodaj u košaricu</button>
      </div>
    </div>

</template>