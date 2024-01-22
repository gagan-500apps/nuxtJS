<template>
    <div  class="Signup-container">
      <h1>Signup</h1>
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
  
  
  .Signup-container > h1{
    padding: 10px 20px;
    text-align: center;
    font-size: 2rem;
}
  </style>
  