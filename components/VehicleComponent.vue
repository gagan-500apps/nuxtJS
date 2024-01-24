<template>
    <div>
      <h3>Vehicle Info</h3>
      <h1>Company:  {{ Comp }} </h1>
      <h1>Model:  {{mod}}</h1>
      
    </div>
  </template>
  
  <script setup>
const {Comp, mod} = defineProps(['Comp', 'mod'])
</script>

<style scoped>
div {
display: flex;
justify-content: left;
flex-direction: column;
align-items: start;
margin-top: 20%;
}
</style>

  <!-- <template>
    <div>
      <h3>Motorcycle Info</h3>
      <p>{{ Company }} {{ model }}</p>
      <p>{{ displayWheels(wheels) }}</p>
    </div>
  </template>
  
  <script setup props="['Company', 'model', 'wheels']" methods="['displayWheels']">
  import { ref } from 'vue';
  
  const displayWheels = (wheels) => {
    return wheels ? `Number of wheels: ${wheels}` : 'Number of wheels not specified';
  };
  </script> -->
  