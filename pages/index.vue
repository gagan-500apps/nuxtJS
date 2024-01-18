
  <template>
    <div class="index">
      
    </div>
  <div>
    <div class="search-container">
      <form @submit.prevent="handleSubmit" class="search-form">
        <input type="text" placeholder="Enter Employe name" v-model="Text" required class="search-input"/>
        <button type="submit" class="search-button">Add</button>
      </form>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

import ustore from '@/stores'

const Text = ref('')

const handleSubmit = () => {
  navigateTo(`/search/${Text.value}`)
  console.log('Text.value',Text.value);
  
//   storeing the data in to the local store
  ustore.name=Text.value
  console.log('ustore.name',ustore.name);
};


//to make mantra has a title name in titla bar
useHead({
  title: "Mantra",
  // meta: [{name:"desc", content:"this is "}]
})  
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.search-form {
  background-color: #cac6c6;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
  width: 85%;
  padding: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  margin: 5%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>