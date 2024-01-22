<template>
  <form @submit.prevent="handleFormSubmit" class="form_container">
    <div v-for="data in arrayData" :key="data.id" class="input_box">
      <span class="label_text">
        {{ data.text }}
      </span>
      <input
        :type="data.type"
        :placeholder="data.placeholder"
        v-model="inputValues[data.name].value"
      />
    </div>
    <button class="form_submit">Submit</button>
    
  </form>
</template>


<!-- -------------------------------------------------------------------------------------------------------------------------------- -->

<script setup>

import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["arrayData"]);
const arrayData = props.arrayData;
 console.log('ARRAYDATA',arrayData)
//console.log("hi");

let inputValues = {};
arrayData.forEach((input) => {
  inputValues[input.name] = ref("");
   console.log('inname',input.name)
});
// console.log(inputValues)

const submittedData = {};

const handleFormSubmit = () => {
  if (arrayData[0].formName === "login") {
    return validateUser();
  }

  for (const [key, value] of Object.entries(inputValues)) {
    submittedData[key] = value.value;
  }
  // console.log(submittedData)
  // Save submitted data to Local Storage
  let localData = JSON.parse(localStorage.getItem(arrayData[0].formName));
  if (!localData) {
    localData = [];
  }
  //console.log("localdata" + localData)
  localData.push(submittedData);
  console.log(localData);
  localStorage.setItem(arrayData[0].formName, JSON.stringify(localData));
  alert("Signedup Succesfully");
  router.push("/login");
};
const validateUser = () => {
  let userData = JSON.parse(localStorage.getItem("signup")) || [];
  const email = inputValues["email"].value;
  const password = inputValues["password"].value;
  let user = null;
  userData.forEach((item) => {
    if (item.email === email && item.password === password) {
      user = item;
      return;
    }
  });

  if (user) {
    console.log("user exist");
    // console.log('username',user.name);
    navigateTo(`home`)
    // router.push("/home");
    alert("welcome to Mantra");
  } else {
    alert("user doesnot exist, SignUp");
  }
};
</script>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<style scoped>
  .form_container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #3498db; /* Change the background color as needed */
    color: #fff;
    text-align: center;
  }

  .input_box {
    margin-bottom: 15px;
  }

  .label_text {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #fff; /* Border color */
    border-radius: 4px;
    background-color: #fff; /* Input field background color */
    color: #333; /* Input field text color */
  }

  .form_submit {
    background-color: #fff; /* Button background color */
    color: #3498db; /* Button text color */
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .form_submit:hover {
    background-color: #2980b9; /* Button background color on hover */
    color: #fff; /* Button text color on hover */
  }
</style>