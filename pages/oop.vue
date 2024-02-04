<template>
    <div class="bg-gray-200 p-36 mt-11">
      <nav class="bg-blue-800 p-4 mb-9 mt-4 text-white">
        <h1 class="text-2xl font-bold">Banking App</h1>
      </nav>
  
      <div class="flex space-x-4">
        <div class="user-container bg-blue-200 p-4 rounded-md shadow-md">
          <h1 class="text-lg font-bold mb-2">User 1</h1>
          <input v-model="user1amt" type="number" placeholder="Enter the Amount" class="border p-2 mb-2">
          <button @click="inst1.increment(user1amt)" class="bg-green-500 text-white px-4 py-2 mr-2 hover:bg-green-600 transition">Add</button>
          <button @click="inst1.decrement(user1amt)" class="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition">Withdraw</button>
        </div>
  
        <div class="user-container bg-blue-200 p-4 rounded-md shadow-md">
          <h1 class="text-lg font-bold mb-2">User 2</h1>
          <input v-model="user2amt" type="number" placeholder="Enter the Amount" class="border p-2 mb-2">
          <button @click="inst2.increment(user2amt)" class="bg-green-500 text-white px-4 py-2 mr-2 hover:bg-green-600 transition">Add</button>
          <button @click="inst2.decrement(user2amt)" class="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition">Withdraw</button>
        </div>
  
        <div class="user-container bg-blue-200 p-4 rounded-md shadow-md">
          <h1 class="text-lg font-bold mb-2">User 3</h1>
          <input v-model="user3amt" type="number" placeholder="Enter the Amount" class="border p-2 mb-2">
          <button @click="inst3.increment(user3amt)" class="bg-green-500 text-white px-4 py-2 mr-2 hover:bg-green-600 transition">Add</button>
          <button @click="inst3.decrement(user3amt)" class="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition">Withdraw</button>
        </div>
      </div>
  
      <div class="mt-8">
        <h1 class="text-2xl font-bold">Net Balances: <span class="text-green-500">{{ inst1.getBalances() }}</span></h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  let instance;
  let user1amt = ref();
  let user2amt = ref();
  let user3amt = ref();
  
  definePageMeta({
  layout: 'navbar'
})


  class Bank {
    balanes = ref(0);
  
    constructor() {
      if (!instance) {
        instance = this;
      } else {
        return instance;
      }
    }
  
    static getInstance() {
      return instance;
    }
  
    getBalances() {
      return this.balanes.value;
    }
  
    increment(amt) {
      this.balanes.value += amt;
    }
  
    decrement(amt) {
    let a  = this.balanes.value-amt
      console.log('this.balanes.value',a);
      if(a<0)
      {
        alert('insuffient balance')
        return;
      }
      this.balanes.value -= amt;
    }
  }
  
  const inst1 = new Bank();
  const inst2 = new Bank();
  const inst3 = new Bank();
  </script>
  
  <style scoped>
  .user-container {
    flex: 1;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 8px;
  }
  
  nav {
    background-color: #0c3478;
    transition: background-color 0.3s ease-in-out;
  }
  
  nav:hover {
    background-color: #1a508b;
  }
  </style>
  