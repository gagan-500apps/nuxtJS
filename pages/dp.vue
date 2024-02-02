<template>

  <h1>hello</h1>
</template>



<!-- <template>
    <div>
      <label for="numbersInput">Enter Numbers (comma-separated):</label>
      <input id="numbersInput" v-model="numbersInput" />
      <button @click="convertToArray">Convert to Array</button>
      <p>Entered Numbers Array: {{ numbers }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const numbersInput = ref('');
  const numbers = ref([]);
  
  const convertToArray = () => {
    const inputArray = numbersInput.value.split(',').map(num => parseInt(num.trim()));
    numbers.value = inputArray;
  };
  </script> -->
  
  

<!-- 

 <template>
    <div>
      <h1>Coin Change Problem</h1>
      <label for="amount">Enter Target Amount:</label>
      <input type="number" id="amount" v-model="targetAmount" />
      <br />
      <label for="coins">Enter Coin Denominations (comma-separated):</label>
      <input type="text" id="coins" v-model="coinInput" />
      <button @click="calculateWays">Calculate Ways</button>
      <p>Number of ways: {{ numberOfWays }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const targetAmount = ref(0);
  const coinInput = ref('');
  const numberOfWays = ref(0);
  
  const calculateWays = () => {
    const target = parseInt(targetAmount.value);
    const coins = coinInput.value.split(',').map(coin => parseInt(coin.trim()));
  
    if (isNaN(target) || coins.some(isNaN)) {
      alert('Invalid input. Please enter valid numbers.');
      return;
    }
  
    const ways = Array(target + 1).fill(0);
    ways[0] = 1;
  
    for (const coin of coins) {
      for (let i = coin; i <= target; i++) {
        ways[i] += ways[i - coin];
      }
    }
  
    numberOfWays.value = ways[target];
  };
  </script>
    -->