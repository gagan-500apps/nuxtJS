<template>
  
    <div class="container">
        <h1 style="font-size: xx-large;">Memory Management</h1>
      <div class="input-container">
        <label for="name">Name:</label>
        <input type="text" v-model="obj.name" placeholder="Your name" />
  
        <label for="age">Age:</label>
        <input type="number" v-model="obj.age" placeholder="Your age" />
  
        <label for="location">Location:</label>
        <input type="text" v-model="obj.locatio" placeholder="Your location" />
      </div>
  
      <div class="gap"></div> <!-- Added a gap between the input and data containers -->
  
      <div class="data-container">
        <div class="data-box">
          <h1>Object 1 Data</h1>
          <p>Name: {{ obj.name }}</p>
          <p>Age: {{ obj.age }}</p>
          <p>Location: {{ obj.locatio }}</p>
        </div>
  
        <div class="data-box">
          <h1>Object 2 Data</h1>
          <p>Name: {{ obj2.name }}</p>
          <p>Age: {{ obj2.age }}</p>
          <p>Location: {{ obj2.locatio }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  definePageMeta({
  layout: 'navbar'
})


  const obj = ref({
    name: '',
    age: '',
    locatio: ''
  });
  
  const obj2 = obj.value;
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column; 
    align-items: center;
    height: 100vh;
    
  }
  
  .input-container {
    text-align: center;
    background-color: #3498db; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle effect */
  }
  
  .input-container label {
    display: block;
    margin-bottom: 8px;
    color: #fff; /* Label text color */
  }
  
  .input-container input {
    width: 100%;
    padding: 8px; /* Reduced input box size */
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #2980b9; /* Border color for input fields */
    border-radius: 4px;
  }
  
  .gap {
    margin: 20px 0;
    /* margin-right: 2%; */
  }
  
  .data-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .data-box {
    width: 48%;
    padding: 50px;
    background-color: #d2d2d2; 
    border-radius: 8px;
    box-shadow: 0 0 100px rgba(17, 16, 16, 0.1);
    font-size: 21px; 
    color: #0e0d0d; 
  }
  
  .data-box h1 {
    color: #258cc4; 
    margin-bottom: 10px;
  }
  </style>
  