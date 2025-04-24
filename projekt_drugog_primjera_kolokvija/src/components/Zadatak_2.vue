<script setup>
    import { ref } from 'vue';

    const sportasi = ref([
        {
            ime: 'Ivan', 
            disciplina: 'plivanje', 
            godine: 25, 
            natjecanja: ['Olimpijske igre', 'Svjetsko prvenstvo']
        },
        {
            ime: 'Ana', 
            disciplina: 'atletika', 
            godine: 30, 
            natjecanja: ['Svjetsko prvenstvo', 'Europsko prvenstvo', 'Olimpijske igre']
        },
        {
            ime: 'Marko', 
            disciplina: 'odbojka', 
            godine: 22, 
            natjecanja: ['Europsko prvenstvo']
        }
    ])

    const novo_natjecanje = ref("");

    function dodaj_natjecanje(sportas_index) {
        sportasi.value[sportas_index].natjecanja.push(novo_natjecanje.value);
        novo_natjecanje.value = "";
    }

    function ukloni_natjecanje(sportas_index, natjecanje_index) {
        sportasi.value[sportas_index].natjecanja.splice(natjecanje_index, 1);
    }

</script>

<template>
    <div>
        ZADATAK 2
        Sportaši:
        <hr>

        <input type="text" v-model="novo_natjecanje"/>
        <div v-for="(sportas, indexSportasa) in sportasi.sort((a, b) => b.natjecanja.length-a.natjecanja.length)">
           <span v-if="indexSportasa == 0" > 🥇 </span>
           <span v-if="indexportasa == 1" > 🥈 </span>
           <span v-if="indexSportasa == 2" > 🥉 </span>

           <b> Ime: </b> {{  sportas.ime }} <br>
           <b> Disciplina: </b> {{  sportas.disciplina }} <br>
           <b> Godine:</b> {{  sportas.godine }} <br>
           <b> Natjecanje:</b>
           <button @click="dodaj_natjecanje(indexSportasa)">+</button> 
           
           <TransitionGroup name="list" tag = "ul">
            <li v-for="(natjecanje, indexNatjecanja) in sportas.natjecanja" :key="natjecanje">
                <button @click="ukloni_natjecanje(indexSportasa, indexNatjecanja)">-</button> {{ natjecanje }}
            </li>
            </TransitionGroup>
           <hr />
        </div>
    </div>
</template>

<style scoped>
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>