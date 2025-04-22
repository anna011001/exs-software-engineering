<script setup>
const props = defineProps(["slikar", "godina", "naslov", "slika"]);

function starost() {
    return 2025 - props.godina;
}
</script>

<template>
  <div>
    <img @click="$emit('kliknuto')" :src="slika" height="100" />
    <br />
    <b>Slikar:</b> {{ slikar }}<br />
    <b>Naslov:</b>
    <span :class="{ underline: starost() > 136 }">
      {{ naslov }}
    </span><br />
    <b>Starost:</b> {{ starost() }}<br />
  </div>
</template>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
