<template>
  <form @submit.prevent="handleFormSubmit" class="form_container">
    <h1 class="text-4xl font-serif  p-2 pb-6">{{ arrayData[0].formName }}</h1>

    <div v-for=" data in arrayData" :key="data.id" class="input_box">
     <!-- <h1 v-if="data.formName==='login'"> LOGIN </h1> -->
      <span class="label_text">
        {{ data.text }}
      </span>
      <!-- <input :type="getInputType(data.type)" :placeholder="data.placeholder" v-model="inputValues[data.name].value" /> -->
      <input
        :type="data.type"
        :placeholder="data.placeholder"
        v-model="inputValues[data.name].value"
      />
    </div>

      <button class="form_submit">Submit</button> <br>
     
      <!-- <span class="show-password">
        <input type="checkbox" @click="toShowPassword" />Show Password
      </span> -->
  </form>
</template>


<!-- -------------------------------------------------------------------------------------------------------------------------------- -->

<script setup>

import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["arrayData"]);
const arrayData = props.arrayData;

const showPassword = ref('')


let inputValues = {};
arrayData.forEach((input) => {
  inputValues[input.name] = ref("");
  // console.log('inname', input.name)
});


const submittedData = {};

const handleFormSubmit = () => {
  if (arrayData[0].formName === "login") {
    return validateUser();
  }

  for (const [key, value] of Object.entries(inputValues)) {
    submittedData[key] = value.value;
  }

  // ---------------------------------------------Validate email and password using REGEX
  if (!validateEmail(submittedData.email)) {
    alert("Invalid email format");
    return;
  }
  if (!validatePassword(submittedData.password)) {
    alert("Password must be at least 8 characters long \nincludeing atleast one number, \natleast one lowercase, and \natleast one uppercase letters");
    return;
  }



  // console.log(submittedData)
  //------------------------------------------------------------------- Save submitted data to Local Storage
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

//---------------------------------------------------------------------------BRFORE REGEX WE USE TO VALIDATE MANUALLY-----------------------------------------------------
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
    // navigateTo(`home`)
    router.push("/home");
    alert("welcome to Mantra");
  } else {
    alert("user doesnot exist");
  }
};


//-------------------------------------------------------------------REGEX FOR VALIDATEING FOR THE MAIL & PASSWORD-----------------------------------------------------
const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,3}$/;
  return emailPattern.test(email);
};
const validatePassword = (password) => {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passwordPattern.test(password);
};


//-------------------------------------------------------------------FOR SHOWING THE PASSWORD-----------------------------------------------------
// const toShowPassword = () => {
//   showPassword.value = !showPassword.value;
// };
// const getInputType = (fieldName) => {
//   return fieldName === "password" && showPassword.value ? "text" : "password";
// };

</script> 

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<style scoped>
.form_container {
  max-width: 300px;
  margin: auto;
  margin-top: 8rem;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #3182CE, #2C5282);
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
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
}

.form_submit {
  background-color: #fff;
  color: #3498db;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form_submit:hover {
  background-color: #2980b9;
  color: #fff;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

</style>