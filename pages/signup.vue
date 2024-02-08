<template>
    <div  class="Signup-container">
      
      <FormComponents :arrayData="arrayData" />
      <p>Alredy have an account? <button @click="goToLogin" class="login-link">Login</button></p>
    </div>
    
    
    <!-- https://ibb.co/Dt6LzPx -->
    <!-- <div class="flex p-4 mt-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-400" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Ensure that these requirements are met:</span>
        <ul class="mt-1.5 list-disc list-inside">         
          <li>Password must be at least 8 characters long includeing atleast one number, atleast one lowercase, and atleast one uppercase letters</li>
          <li>'@' is must for Email</li>
        </ul>
      </div>
    </div> -->
  </template>



  <script setup>
  import FormComponents from '~/components/FormComponents.vue';  
  const arrayData = 
  [
  { id: 1, name: "name", placeholder: "Enter your name", type: "text", formName: "signup", submit:"Signup", text: "Name" },
  { id: 2, name: "email", placeholder: "Enter your email", type: "text", formName: "signup", submit:"Signup", text: "Email" },
  { id: 4, name: "password", placeholder: "Enter your password", type: "password", formName: "signup", submit:"Signup", text: "Password" },
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
  margin-left: 45%;
}

.login-link {
  color: #038ce7;
  margin-left: 5px;
}
  </style>
  