<template>
    <div>
      <h3>Car Info</h3>    
      <h1>Company:  {{ Company }} </h1>
      <h1>Model:  {{model }}</h1>
      <h1>NumberofDoors: {{ doors }}</h1>
    
    </div>
  </template>
  
  <script setup>
  const {Company, model, doors} = defineProps(['Company', 'model', 'doors'])
</script> 

<style scoped>
div {
display: flex;
justify-content: left;
flex-direction: column;
align-items: start;
margin-left: 88%;
}
</style>