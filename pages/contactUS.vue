<template>
<FormComponents :arrayData="arrayData" />
</template>

<script setup>
import FormComponents from '~/components/FormComponents.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const arrayData = [
  { id: 1, name: "name", placeholder: "Enter your Name", type: "text", formName: "Get In Touch", submit:"Submit", text: "Enter your Name" },
  { id: 2, name: "email", placeholder: "Enter your email", type: "text", formName: "Get In Touch", submit:"Submit", text: "Enter your Email" },
  { id: 3, name: "phonenumber", placeholder: "Enter your PhoneNumber", type: "number", formName: "Get In Touch", submit:"Submit", text: "Enter your PhoneNumber" },
  { id: 4, name: "addmessage", placeholder: "Add Message", type: "text", formName: "Get In Touch", submit:"Submit", text: "Add Message" },
]
</script>