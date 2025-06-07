<script setup>
    import Zadatak_1 from '@/components/Zadatak_1.vue';
    import Zadatak_2 from '@/components/Zadatak_2.vue';
</script>

<template>
    <div>
        <!--Zadaci se rješavaju unutar komponenti/pregleda-->
        <!--Za biranje zadataka treba mjenjati true/false-->
        <!--Za biranje routera treba u mapi 'router' u 'index.js' mjenjat default export-->
        <Zadatak_1 v-if="true"/>
        <Zadatak_2 v-if="false"/>
    </div>
</template>