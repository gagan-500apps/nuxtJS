<template>

  <div class="container mx-auto mt-15 text-center flex flex-col items-center mt-60">
    <div class="flex flex-col items-center mb-6">
      <h1 class="text-3xl font-bold mb-4 text-blue-500">Enter the random number to sort</h1>
      <div class="flex flex-row space-x-4 items-center mb-3">
        <input type="number" v-model="first" class="border p-3 w-16 text-center focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300">
        <input type="number" v-model="second" class="border p-3 w-16 text-center focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300">
        <input type="number" v-model="third" class="border p-3 w-16 text-center focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300">
        <input type="number" v-model="fourth" class="border p-3 w-16 text-center focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300">
        <input type="number" v-model="five" class="border p-3 w-16 text-center focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300">
      </div>
      <div class="flex space-x-5">
        <button @click="bubbleSort" class="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-all duration-300">Bubble Sort</button>
        <button @click="selectionSort" class="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-all duration-300">Selection Sort</button>
      </div>
    </div>

    <h1 v-if="sortedValues" class="text-2xl font-bold mt-4">The Sorted Array is:</h1>
    <h1 v-if="sortedValues" class="text-xl mt-2">{{ sortedValues }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const first = ref();
const second = ref();
const third = ref();
const fourth = ref();
const five = ref();
let sortedValues = ref();

definePageMeta({
  layout: 'navbar'
})

const bubbleSort = () => {
  const array1 = [first.value, second.value, third.value, fourth.value, five.value];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length - 1; j++) {
      if (array1[j] > array1[j + 1]) {
        const temp = array1[j];
        array1[j] = array1[j + 1];
        array1[j + 1] = temp;
      }
    }
  }
  sortedValues.value = [...array1];
}

const selectionSort = () => {
  const array = [first.value, second.value, third.value, fourth.value, five.value];
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  sortedValues.value = [...array];
}
</script>

<style scoped>
/* You can add custom scoped styles here if needed */
</style>
