<script setup>
import Slika from './Slika.vue'
import {ref} from 'vue'

import TheOldGuitarist from '@/assets/slike/The Old Guitarist.png'
import LeMoulinDeBluteFin from '@/assets/slike/Le Moulin de Blute-Fin.png'
import CourtesanAsleep from '@/assets/slike/Courtesan Asleep.png'

    const galerija = [    
        {
            slikar: "Pablo Picasso",
            godina: 1903,
            naslov: "The Old Guitarist",
            slika: TheOldGuitarist
        },
        {
            slikar: "Vincent van Gogh",
            godina: 1886,
            naslov: "Le Moulin de Blute-Fin",
            slika: LeMoulinDeBluteFin
        },
        {
            slikar: "Hokusai",
            godina: 1890,
            naslov: "Courtesan Asleep",
            slika: CourtesanAsleep
        },
    ];

    const povecana_slika = ref("");
</script>

<template>
    <div>
        <Slika v-for="slika in galerija"
        :slikar="slika.slikar"
        :godina="slika.godina"
        :naslov="slika.naslov"
        :slika="slika.slika"
        @povecaj="povecana_slika=slika.slika"/>
    </div>

    <img :src="povecana_slika">
</template>