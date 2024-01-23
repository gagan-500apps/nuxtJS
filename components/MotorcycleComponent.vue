<template>
  <div>
    <h3>Bike Info</h3>
      <h1>Company:  {{ make }} </h1>
      <h1>Model:  {{model }}</h1>
      <h1>Numberofwheels: {{ wheels }}</h1>
      <h1>---------------------------------------</h1>
  </div>
</template>

<script setup>
const {make, model, wheels} = defineProps(['make', 'model', 'wheels'])
</script>