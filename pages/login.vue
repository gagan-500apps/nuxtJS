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
      <!-- <button class="form_submit">Signup</button> -->
    </div>
  </template>
  
  <style scoped>
.login-container > h1{
    padding: 10px 20px;
    text-align: center;
    font-size: 2rem;
}
.form_submit {
    background-color: #fff; /* Button background color */
    color: #3498db; /* Button text color */
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 47%;
  }

  .form_submit:hover {
    background-color: #2980b9; /* Button background color on hover */
    color: #fff; /* Button text color on hover */
  }
  </style>
  