<template>
   <div>
     <h1 class="heading">{{ ustore.name }},</h1>
     <h1 class="sub-heading">Welcome to Mantra Technologies</h1>
   </div>
 </template>
 
 <style scoped>
 .heading {
   color:#3bd142 ;
   font-family: 'Arial', sans-serif;
   font-size: 32px;
   font-weight: bold;
   margin-bottom: 10px;
 }
 
 .sub-heading {
   color: #3498db;
   font-family: 'Helvetica', sans-serif;
   font-size: 18px;
 }
 </style>
 
 <script setup>
 import ustore from '@/stores'
 import { ref } from 'vue';
 
 const name = ref(ustore.name);
 </script>
 