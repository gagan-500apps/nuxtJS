<script setup>
const { even } = useNuxtApp()
const name=ref('')
</script>

<template>

  <input type="text" v-model="name">

  <div>
    {{ even(10) }}
  </div>
</template>
