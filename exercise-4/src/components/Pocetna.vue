<script setup>
import JustifiedTextSection from './JustifiedTextSection.vue';
import Separator from './Separator.vue';
</script>

<template>
                <h1 class="text-indigo-100 text-2xl font-light mt-2">
                    Dobro došli na moju web stranicu!
                </h1>
                
                <Separator />

                <JustifiedTextSection>
                    <p>
                        Ova stranica napravljena je za projekt iz kolegija Multimedijalni sustavi. 
                        Dizajn stranice izrađen je u Figmi.
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="figma logo"
                        class="h-16 w-full object-contain">
                </JustifiedTextSection>
                
                <Separator />

                <section class="text-justify">
                    Zadatak nam je bio da za određenu temu, uz pomoć različitih alata za izradu 
                    reklama za tisak ili brošura, za uređivanje i obradu fotografija, za kreiranje 
                    i obradu grafičkih elemenata vektorske grafike i/ili animacija, za snimanje i 
                    obradu audio sadržaja te za uređivanje i sastavljanje videozapisa, izradimo 
                    vlastite slike, grafike i zvukove kojima ćemo predstaviti odabranu temu.
                </section>
                
                <Separator />

                <section class="text-justify">
                    Svaki uradak ćemo opisati korak po korak, uz detaljan postupak izrade u svakome
                    od alata, a svaki uradak bit će prikazan u zasebnoj kartici.
                </section>
</template>