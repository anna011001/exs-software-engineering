<script setup>
    import { ref } from 'vue';
    import { useDucanStore } from '@/stores/ducanStore';
    import { useRouter } from 'vue-router';

    const ducanStore = useDucanStore();
    const router = useRouter();

    const naziv = ref('');
    const cijena = ref(0);
    const slika = ref('');

</script>

<template>
    <h1>
        Izrada novog proizvoda
    </h1>
    <hr>

    <div>
        Naziv: <input type="text" v-model="naziv">
        Cijena: <input type="number" v-model="cijena">
        Slika: <input type="text" v-model="slika">
        <img :src="slika" height="50">
    </div>

    <hr>
    <button @click="ducanStore.addProduct({ 'name': naziv, 'price': cijena, 'image': slika })">
        Dodaj proizvod
    </button>

    <button @click="router.back()">
            Back
    </button>
    
</template>