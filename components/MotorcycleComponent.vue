<template>
  <div class="body">
  
    <div class="div">
    <h3>Bike Info</h3>
      <h1>Company:  {{ Company }} </h1>
      <h1>Model:  {{model }}</h1>
      <h1>Numberofwheels: {{ wheels }}</h1>   
  </div>
</div>
</template>

<script setup>
const {Company, model, wheels} = defineProps(['Company', 'model', 'wheels'])
</script>

<style scoped>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>