<script setup>
import { useSolarSystemStore } from '@/stores/solarSystemStore';

import { useRouter } from 'vue-router';
const router = useRouter();

const solarSystemStore = useSolarSystemStore();
const props = defineProps(['planet'])
const loadedPlanet = solarSystemStore.getPlanet(props.planet);

</script>

<template>
    <div>
        <button @click="router.back()"> <!-- ili go(-1) -->
            Back
        </button>
        <br>
        <br>
        <div style="font-size: 24px; font-weight: bold;">
        {{  loadedPlanet.name }}
        </div>
        <img :src="loadedPlanet.image" height="200"/>
        <br>
        {{ loadedPlanet.description }}
<hr/>
<b>Satellites</b>
        <div v-if="loadedPlanet.satellites.length == 0">
            No satellites...
        </div>
        <div v-else>
            <div v-for="satellite in loadedPlanet.satellites">
                <div>
                <img :src="satellite.image" height="100">
                <br>
                <RouterLink :to="`/solarsystem/${loadedPlanet.name}/${satellite.name}`">
                    {{  satellite.name }}
                </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>