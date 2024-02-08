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
flex-direction: column;
align-items: start;
margin-top: 20%;
}
</style>