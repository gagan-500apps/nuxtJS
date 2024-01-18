
<template>
  <div>
  
      <form @submit.prevent="handleSubmit">
        <h1>Login</h1>
        <input type="text" placeholder="Enter your username" v-model="Text" required />
        <input type="password" placeholder="Enter your password" v-model="Psw" required />
        <button type="submit">LogIn</button><br>
        <button type="submit">signup</button>
      </form>
 
  </div>
</template>

<script setup>

import { ref } from 'vue';

import ustore from '@/stores'

definePageMeta({
layout:"login"
})
const Text = ref('')
const Psw=ref('')

const handleSubmit = () => {
navigateTo(`/main/${Text.value}`)
//   storeing the data in to the local store
ustore.name=Text.value
ustore.password=Psw.value
};

//to make mantra has a title name in titla bar
useHead({
title: "Mantra",
// meta: [{name:"desc", content:"this is "}]
})  


</script>


<style scoped>

  /* Container styling */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  /* Form styling */
  form {
    background-color: #f4f4f4;
    padding: 80px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 600px;
    text-align: center;
  }

  /* Heading styling */
  h1 {
    color: #333;
    font-size: 28px;
    margin-bottom: 20px;
  }

  /* Input styling */
  input {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
  }

  /* Button styling */
  button {
    width: 100%;
    padding: 15px;
    background-color: #80c27a;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s ease;
  }

  /* Add more space between buttons */
  button + button {
    margin-top: 15px;
  }

  /* Button hover effect */
  button:hover {
    background-color: #267bb8;
  }

</style>
