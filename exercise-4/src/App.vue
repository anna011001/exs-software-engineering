<script setup>
    import { ref } from 'vue'
    import Footer from './components/Footer.vue';
    import Pocetna from './components/Pocetna.vue';
    import PageSlika from './components/PageSlika.vue';

import AddHeader from './components/AddHeader.vue';
import Navbar from './components/Navbar.vue';
import PageGrafika from './components/PageGrafika.vue';

const links = [
        { name: "POČETNA", active: true},
        { name: "SLIKA", active: true},
        { name: "ZVUK", active: false},
        { name: "GRAFIKA", active: true},
        { name: "MODEL", active: false},
        { name: "VIDEO", active: false}
    ];
    const activeLink = ref("POČETNA");
</script>

<template>
    <div class="fixed w-full h-full flex justify-center poppins text-sm text-indigo-300
        bg-gradient-to-b from-[#1B1A55] via-[#2B428D] to-[#3B39BB]">

        <div style="background-image: url('./src/assets/images/pattern.jpg'); 
            background-size: 200px;"
            class="fixed w-full h-full bg-repeat opacity-[3%] -z-10"></div>

        <div class="bg-[#535C91]/25 border-x border-[#9290C3]/10 w-[700px] max-w-[700px] shadow-lg
            flex flex-col justify-between px-8 gap-4 overflow-auto">

            <AddHeader />
            <Navbar v-model:activeLink="activeLink" :links = "links" :activeLink = "activeLink"/>

            <div v-if="activeLink == 'POČETNA'" class="grow flex flex-col gap-4">
                <Pocetna />
            </div>

            <div v-if="activeLink == 'SLIKA'" class="grow flex flex-col gap-4">
                <PageSlika />
                
            </div>

            <div v-if="activeLink == 'GRAFIKA'" class="grow flex flex-col gap-4">
                <PageGrafika />
            </div>

  <Footer />
        </div>
    </div>
</template>