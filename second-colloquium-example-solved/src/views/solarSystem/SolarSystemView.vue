<script setup>
import { useSolarSystemStore } from '@/stores/solarSystemStore';
import { RouterLink } from 'vue-router';

const solarSystemStore = useSolarSystemStore();

</script>

<template>
    <div>
        <h2>SolarSystem</h2>

        <div style="display: flex; gap: 16px;">
        <div v-for="planet in solarSystemStore.getPlanets()">
           <div>
            <img :src="planet.image" height="50">
            <br>
            <RouterLink :to="`/solarsystem/${planet.name}`">
                {{  planet.name }}
            </RouterLink>
           </div>
        </div>
        </div>
    </div>
</template>