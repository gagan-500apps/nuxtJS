<template>
    <div>
      <h3>Car Info</h3>    
      <h1>Company:  {{ make }} </h1>
      <h1>Model:  {{model }}</h1>
      <h1>NumberofDoors: {{ doors }}</h1>
      <h1>---------------------------------------</h1>
    
    </div>
  </template>
  
  <script setup>
  const {make, model, doors} = defineProps(['make', 'model', 'doors'])
</script> 
  <!-- <template>
    <div>
      <h3>Car Info</h3>
      <p>{{ make }} {{ model }}</p>
      <p>{{ displayDoors() }}</p>
    </div>
  </template>
  
  <script setup props="['make', 'model', 'doors']" methods="['displayDoors']">
  import { ref } from 'vue';
  
  const displayDoors = (doors) => {
    return doors ? `Number of doors: ${doors}` : 'Number of doors not specified';
  };
  </script> -->