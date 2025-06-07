<script setup>
import { useDucanStore } from '@/stores/ducanStore';

const ducanStore = useDucanStore();

function ukupnaCijena() {
    let suma = 0;

    for (const proizvod of ducanStore.cart) {
        suma += proizvod.price;
    }
      return suma;
}

</script>

<template>
    <div>
        <header style="display: flex; justify-content: space-between;">
            <RouterLink to="/shop">Trgovina</RouterLink>
            <RouterLink to="/cart">Košarica</RouterLink>
            <RouterLink to="/admin">admin</RouterLink>
            U košarici: {{ ukupnaCijena().toFixed(2) }} € za {{ ducanStore.cart.length }} proizvoda
        </header>

        <RouterView/>
    </div>
</template>

<style>
a.router-link-active {
    color: green;
}</style>