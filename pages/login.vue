    <script setup>
    import FormComponents from '~/components/FormComponents.vue';

    const arrayData = [
        {
            id: 1,
            name: "email",
            placeholder: "Enter email",
            type: "text",
            formName: "login",
            text:"Enter Email"
        },
        {
            id: 2,
            name: "password",
            placeholder: "Enter password",
            type: "password",
            formName: "login",
            text:"Enter Password"   
        },
    ]
    </script>

<template>
    <div class="login-container">
      <h1>Login</h1>
      <FormComponents :arrayData="arrayData" />
    </div>
  </template>
  
  <style scoped>
.login-container > h1{
    padding: 10px 20px;
    text-align: center;
    font-size: 2rem;
}
  </style>
  