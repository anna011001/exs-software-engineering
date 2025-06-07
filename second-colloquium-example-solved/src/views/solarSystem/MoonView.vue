<script setup>
import { useSolarSystemStore } from '@/stores/solarSystemStore';

import { useRouter } from 'vue-router';
const router = useRouter();

const solarSystemStore = useSolarSystemStore();
const props = defineProps(['planet', 'satellite'])
debugger
const loadedSatellite = solarSystemStore.getSatellite(props.planet, props.satellite);
const loadedPlanet = solarSystemStore.getPlanet(props.planet);

</script>

<template>
    <div>
        <button @click="router.back()">
            Back
        </button>
        <br>
        <br>
        <div style="font-size: 24px; font-weight: bold;">
        {{  loadedSatellite.name }}
        </div>
        <img :src="loadedSatellite.image" height="200">
        <br>
        {{ loadedSatellite.description }}
        <br>
        <hr>
        
        <div v-if="loadedPlanet.satellites.length == 0">
            Nema satelita!
        </div>
    </div>
</template>