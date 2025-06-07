<script setup>
import { useDucanStore} from '@/stores/ducanStore';
import { RouterLink } from 'vue-router';

const ducanStore = useDucanStore();

</script>

<template>
    <h1>Admin:</h1>
    <RouterLink :to="'/admin/add'">
        Dodavanje proizvoda
    </RouterLink>
    <hr>
    <div style="display: flex; flex-wrap: wrap; gap : 16px;">
        <div v-for="(proizvod, index) in ducanStore.products" :key="index"
            style="border: 1px solid black; padding: 4px; width:120px">
            <img :src="proizvod.image" height="50">
            <br>
            Naziv: <b>{{ proizvod.name }}</b>
            <br>
            Cijena: <b>{{ proizvod.price }} €</b>
            <br>
            <button @click="ducanStore.removeProduct(index)">Obriši</button>
        </div>
    </div>

</template>