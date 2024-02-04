<template>
 

  <button @click="getotp" class="otp-button">Get OTP</button>
  <div v-if="flag" class="otp-container">
    The OTP Number is <span>{{ otpNumber }}</span>
  </div>
</template>


<script setup>

definePageMeta({
  middleware : 'login',
  layout: 'navbar'
})

const { otp } = useNuxtApp() //here we are calling the otp.js otp method
const otpNumber = ref('')
const flag = ref(false)

const getotp = () => {
  otpNumber.value = otp(4) //here we are calling the otp.js otp method
  flag.value = 'true'
}
</script>




<style scoped>
.otp-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 50%;
  margin-top: 100px;
}

.otp-button:hover {
  background-color: #2ad82a;
}

.otp-container {
  margin-top: 2%;
  margin-right: 40%;
  padding: 10px;
  margin-left: 45%;
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-style: oblique;
}

.otp-container span {
  color: green;
  margin-left: 10px;
  font-size: 120%;
}
</style>