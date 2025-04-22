<script setup>
import Slika from 'Slika.vue'
import {ref} from 'vue'
    const galerija = [    
        {
            slikar: "Pablo Picasso",
            godina: 1903,
            naslov: "The Old Guitarist",
            slika: "/src/assets/slike/The Old Guitarist.png"
        },
        {
            slikar: "Vincent van Gogh",
            godina: 1886,
            naslov: "Le Moulin de Blute-Fin",
            slika: "/src/assets/slike/Le Moulin de Blute-Fin.png"
        },
        {
            slikar: "Hokusai",
            godina: 1890,
            naslov: "Courtesan Asleep",
            slika: "/src/assets/slike/Courtesan Asleep.png"
        },
    ];

    const povecana_slika = ref("");
</script>

<template>
    <div style="">
        <Slika v-for="Slika in galerija"
        slikar="slika.slikar"
        godina="slika.godina"
        naslov="slika.naslov"
        slika="slika.slika"
        @povecaj="povecana_slika=slika.slika"/>
    </div>

    <img :src="povecana_slika"  alt="">
</template>

<style scoped>

</style>