<template>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="input-box">
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          v-model="inputEmail"
          :class="{ 'is-invalid': !isEmailValid() }"
          placeholder="Enter your mail"
        />
        <div v-if="!isEmailValid()" class="error-message">Invalid email format</div>
      </div>
  
      <div class="input-box">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="inputPassword"
          :class="{ 'is-invalid': !isPasswordValid() }"
          placeholder="Enter your psw"
        />
        <div v-if="!isPasswordValid()" class="error-message">
          Password should be at least 8 characters long and include both letters and numbers.
        </div>
      </div>
  
      <button type="submit" class="form-submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const inputEmail = ref('');
  const inputPassword = ref('');
  
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value);
  
  const isPasswordValid = () => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputPassword.value);
  
  const submitForm = () => {
    if (!isEmailValid() || !isPasswordValid()) {
      alert('Form submission failed. Please check your inputs.');
      return;
    }
  
    // Your form submission logic here...
    alert('Form submitted successfully!');
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .input-box {
    margin-bottom: 15px;
  }
  
  .label-text {
    display: block;
    margin-bottom: 5px;
  }
  
  .is-invalid {
    border: 1px solid red;
  }
  
  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  
  .form-submit {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .form-submit:hover {
    background-color: #2980b9;
  }
  </style>
  



<!-- <template>
    <div>
      <textarea v-model="message" placeholder="Type your message"></textarea>
      <button @click="checkForSpam">Check for Spam</button>
      <div v-if="isSpam" class="spam-message">This message may contain spam!</div>
      <div v-else class="ham-message">This message is not spam.</div>
    </div>
  </template>
   -->
  <!-- <script setup>
import { ref } from 'vue';  
  const message = ref('');
  const isSpam = ref(false);
  
  const spamWords = ['buy', 'earnmoney', 'free', 'limited time offer', 'winner', 'discount', 'guarantee'];
  
  const checkForSpam = () => {
    // Case-insensitive regular expression pattern
    const regexPattern = new RegExp(spamWords.join('|'), 'i');
    
    // Check if the message contains any spam words
    isSpam.value = regexPattern.test(message.value);
  }
  </script>
   -->
  <!-- <style scoped>
  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
  }
  
  .spam-message {
    color: red;
    margin-top: 10px;
  }
  
  .ham-message {
    color: green;
    margin-top: 10px;
  }
  </style>
   -->