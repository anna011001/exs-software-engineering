<script setup>
  import { ref, computed } from 'vue';

  const stupci = ['Naziv', 'Cijena', 'Količina', 'Ukupno', ''];

  const proizvodi = ref([]);
  const nazivProizvoda = ref('');
  const cijenaProizvoda = ref(0);

  function dodajArtikl() {
    const proizvod = proizvodi.value.find(
      (p) => p.naziv === nazivProizvoda.value
    )
    if (proizvod) {
      proizvod.kolicina++;
      proizvod.ukupno = (proizvod.cijena * proizvod.kolicina).toFixed(2);

    } else {
    proizvodi.value.push({
      naziv: nazivProizvoda.value,
      cijena: cijenaProizvoda.value,
    kolicina: 1,
    ukupno: cijenaProizvoda.value,
    });
    }
    nazivProizvoda.value = '';
    cijenaProizvoda.value = 0;
  }

  function izbrisiArtikl(index) {
    proizvodi.value.splice(index, 1);
  }

  function promijeniKolicinu(index, razlika) {
    const proizvod = proizvodi.value[index];
    if (proizvod.kolicina + razlika <= 0) {
      izbrisiArtikl(index);
    }
    else {
      proizvod.kolicina += razlika;
      proizvod.ukupno = (proizvod.cijena * proizvod.kolicina).toFixed(2);
    }
  }

  const ukupno = computed(() => 
    proizvodi.value.reduce((sum, proizvod) => sum + proizvod.ukupno, 0)
  );
</script>

<template>
  <div class="h-full min-h-screen p-4">
    <h1 class="text-3xl font-bold mb-4"> Košarica </h1>

    <hr class="h-2 w-full mt-15" />

    <div class="gap-5 flex items-center justify-center">
    Naziv proizvoda:

    <input
      v-model = "nazivProizvoda"
      type="text"
      class="border border-gray-300 rounded p-1 mb-4 mt-5"/>

    Cijena proizvoda:

    <input
      v-model = "cijenaProizvoda"
      type="number"
      class="border border-gray-300 rounded p-1 mb-4 mt-5"/>

      <button
        @click = "dodajArtikl"
        :disabled = "!nazivProizvoda || cijenaProizvoda <= 0"
        class="bg-blue-500 text-white rounded p-2 mb-4 mt-5 disabled:opacity-25 disabled:cursor-notallowed">
        Dodaj artikl
      </button>
  </div>

    <div>
      <table class="min-w-full border border-gray-300">
        
        <thead>
          <tr>
            <th v-for="stupac in stupci" class="border border-gray-300 p-2">{{ stupac }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(proizvod, index) in proizvodi" :key="index">
            <td class="border border-gray-300 p-2">{{ proizvod.naziv }}</td>
            <td class="border border-gray-300 p-2">{{ proizvod.cijena }}</td>
            <td class="border border-gray-300 p-2">
              <button @click = "promijeniKolicinu(index, -1)" 
                class="bg-red-500 text-white rounded px-2 py-1">
                -
              </button>

              {{ proizvod.kolicina }}
              <button @click = "promijeniKolicinu(index, 1)" 
                class="bg-green-500 text-white rounded px-2 py-1">
                +
              </button>

            </td>
            <td class="border border-gray-300 p-2">{{ proizvod.ukupno }}</td>
            <td class="border border-gray-300 p-2">
              <button @click = "izbrisiArtikl(index)" 
                class="bg-red-500 text-white rounded px-2 py-1">
                Izbriši
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-4">
        Ukupno: {{ ukupno }}
      </div>

    </div>
</div>
</template>
