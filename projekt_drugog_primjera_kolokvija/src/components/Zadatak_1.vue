<script setup>
import { ref, computed } from 'vue';

const broj1 = ref(0);
const broj2 = ref(0);
const operacija = ref("");


// computed funkcija se ažurira na temelju reaktivnih varijabli, dok obična funkcija nije reaktivna i ne ažurira se automatski kada se promijene ulazne vrijednosti.
const provjeraOperacije = computed(() => {
  return ["zbrajanje", "oduzimanje", "mnozenje", "dijeljenje"].includes(operacija.value.toLowerCase());
});
</script>

<template>
  <div>
    <p>ZADATAK 1</p>

    <input type="number" v-model.number="broj1" />
    <input type="number" v-model.number="broj2" />
    <input type="text" v-model="operacija" />

    <div v-if="!provjeraOperacije">
      Nepoznata operacija!
    </div>
    <div v-else-if="operacija.toLowerCase() === 'zbrajanje'">
      {{ broj1 + broj2 }}
    </div>
    <div v-else-if="operacija.toLowerCase() === 'oduzimanje'">
      {{ broj1 - broj2 }}
    </div>
    <div v-else-if="operacija.toLowerCase() === 'mnozenje'">
      {{ broj1 * broj2 }}
    </div>
    <div v-else-if="broj2 === 0">
      Dijeljenje s 0 nije moguće!
    </div>
    <div v-else>
      {{ broj1 / broj2 }}
    </div>
  </div>
</template>
