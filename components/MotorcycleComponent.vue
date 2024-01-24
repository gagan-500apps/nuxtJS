<template>
  <div>
    <h3>Bike Info</h3>
      <h1>Company:  {{ Company }} </h1>
      <h1>Model:  {{model }}</h1>
      <h1>Numberofwheels: {{ wheels }}</h1>
     
  </div>
</template>

<script setup>
const {Company, model, wheels} = defineProps(['Company', 'model', 'wheels'])
</script>

<style scoped>
div {
display: flex;
justify-content: left;
flex-direction: column;
align-items: start;
margin-left: 40%;
}
</style>