<template>
    <div>
      <h1 class="signup-title">Signup</h1>
      <FormComponents :arrayData="arrayData" />
    </div>
  </template>
  
  <script setup>
  import FormComponents from '~/components/FormComponents.vue';
  
  const arrayData = [
    {
      id: 1,
      name: "name",
      placeholder: "Enter your name",
      type: "text",
      formName: "signup",
      text: "Name"
    },
    {
      id: 2,
      name: "email",
      placeholder: "Enter your email",
      type: "text",
      formName: "signup",
      text: "Email"
    },
    {
      id: 4,
      name: "password",
      placeholder: "Enter your password",
      type: "password",
      formName: "signup",
      text: "Password"
    },
  ];
  </script>
  
  <style scoped>
  
  
  .signup-title {
    font-size: 24px;
    color: #0056b3;
    margin-bottom: 15px;
    font-family: 'Arial', sans-serif;
  }
  
  /* Form styling */
  .form-group {
    margin-bottom: 15px;
  }
  
  .label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
    font-weight: bold;
  }
  
  .input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  