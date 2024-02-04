<template>

  <div class="parent">
    <div>
      <textarea v-model="message" placeholder="Type your message"></textarea>
      <button @click="checkForSpam">Check for Spam</button>
      <div v-if="flag">
        <div v-if="isSpam" class="spam-message">This message may contain spam!</div>
        <div v-else class="ham-message">This message is not spam.</div>
      </div>
    </div>
    <div class="spamtag">
      <p>Spam Words are:</p>
      <li>buy, earnmoney, free, limited time offer, winner, discount, guarantee</li>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('');
const isSpam = ref(false);
const flag = ref(false);

const spamWords = ['buy', 'earnmoney', 'free', 'limited time offer', 'winner', 'discount', 'guarantee'];

definePageMeta({
  layout: 'navbar'
})

const checkForSpam = () => {
  const regexPattern = new RegExp(spamWords.join('|'), 'i');

  isSpam.value = regexPattern.test(message.value);
  flag.value = true
}
</script>


<style scoped>

.parent{
  display: flex;
  align-items: start;
  justify-content: space-between;
}


textarea{
  border: 2px solid grey;
  border-radius: 10px;
}

.parent > div:first-child{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 45rem;
  align-items: center;

}

.parent > div:nth-child(2){
  width: 300px;
  border: 1px solid grey;
  padding: 10px;
}

  .spamtag {
  /* margin-left: 70%; */
  /* margin-bottom: 10%; */
  text-align: left;
  margin-top: 50px;
  margin-right: 15%;
}

.spamtag > li {
  list-style-type: none;
}

.spamtag > p {
  text-transform: capitalize;
  font-weight: bold;
}

textarea {
  height: 150px;
  margin-top: 100px;
  margin-bottom: 1px;
  margin-left: 10%;
  padding-right: 100%;
}

.spam-message {
  margin-left: 25%;
  color: red;
  margin-top: 50px;
  font-size: x-large;
}

.ham-message {
  margin-left: 25%;
  color: green;
  margin-top: 50px;
  font-size: x-large;
}
 button{
  
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0c3478;
  color: #fff;
}
 
</style>
 