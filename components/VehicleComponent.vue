<template>
    <div>
      <h3>Vehicle Info</h3>
      <h1>Company:  {{ make }} </h1>
      <h1>Model:  {{model }}</h1>
      <h1>---------------------------------------</h1>
    </div>
  </template>
  
  <script setup>
const {make, model} = defineProps(['make', 'model'])
</script>


  <!-- <template>
    <div>
      <h3>Motorcycle Info</h3>
      <p>{{ make }} {{ model }}</p>
      <p>{{ displayWheels(wheels) }}</p>
    </div>
  </template>
  
  <script setup props="['make', 'model', 'wheels']" methods="['displayWheels']">
  import { ref } from 'vue';
  
  const displayWheels = (wheels) => {
    return wheels ? `Number of wheels: ${wheels}` : 'Number of wheels not specified';
  };
  </script> -->
  