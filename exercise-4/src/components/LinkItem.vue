<script>
export default{
    props: {
        link: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
{{ link.name }}
<b
  v-if="link.name == activeLink"
  class="text-purple-400 -z-[5] absolute -left-0.5 blur-sm"
>
  {{ link.name }}
</b>
</template>