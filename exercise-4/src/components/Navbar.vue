<script setup>
import { ref } from "vue";
import LinkItem from "./LinkItem.vue";
    
const props = defineProps({
    links: {
        type: Array,
        required: true,
    },
    activeLink: {
        type: String,
        required: true,
    },
})

const emit = defineEmits(["update:activeLink"]);

</script>

<template>
  <nav
    class="sticky top-0 w-full flex gap-4 flex-wrap items-center justify-around bg-[#070F2B]/25 backdrop-blur-sm py-2 px-8 rounded-lg"
  >
    <div
      v-for="link in links"
      class="text-sm z-10 relative transition"
      @click="emit('update:activeLink', link.name)"
      :class="[
        link.name == activeLink
          ? 'underline text-purple-100'
          : 'cursor-pointer text-indigo-300 text-sm hover:text-indigo-200 hover:scale-105',
        link.active
          ? ''
          : 'text-indigo-500/50 text-sm pointer-events-none font line-through',
      ]"
    >
        <LinkItem :link="link" />
    </div>
  </nav>
</template>
