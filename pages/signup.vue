<template>
    <div  class="Signup-container">
      <h1>Signup</h1>
      <FormComponents :arrayData="arrayData" />
      <p>Alredy have an account? <span @click="goToLogin" class="login-link">Login</span></p>

    </div>
  </template>



  <script setup>
  import FormComponents from '~/components/FormComponents.vue';  
  const arrayData = 
  [
  { id: 1, name: "name", placeholder: "Enter your name", type: "text", formName: "signup", text: "Name" },
  { id: 2, name: "email", placeholder: "Enter your email", type: "text", formName: "signup", text: "Email" },
  { id: 4, name: "password", placeholder: "Enter your password", type: "password", formName: "signup", text: "Password" },
];


function goToLogin(){
  navigateTo('/login')
}

  </script>



  <style scoped>
  .Signup-container > h1{
    padding: 10px 20px;
    text-align: center;
    font-size: 2rem;
}

.login-link:hover {
  background-color: #15ce34;
  color: #fff;
}

p {
  display: flex;
  justify-content: center;
}

.login-link {
  color: #038ce7;
  margin-left: 5px;
}
  </style>
  