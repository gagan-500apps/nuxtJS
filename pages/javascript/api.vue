<template>

<!-- <NuxtLayout name="defaultttt">
    <NuxtPage />
  </NuxtLayout> -->

  <div :class="{ 'dark-mode': isDarkMode }">
    <input type="text" v-model="searchText" placeholder="Search  for an author ">

   <p>Toggle Dark Mode: <input type="checkbox" v-model="isDarkMode"></p>
   
    <div class="parent">
        <h1 class="title">News Author Page</h1>

        <div id="author-container">  
            <div class="author-card" v-for="(user, index ) in authorDataArr" :key="index">
                <h2 class="author-name">{{ user.author }}</h2>
                <img class="author-img" :src="`${user.image}`" alt="${author} avatar">
                               
                <p class="bio">{{ user.bio.length > 50 ? `${user.bio.slice(0, 50)}...` : user.bio }}</p>
                <!-- <p class="author-bio">{{author.bio}}</p>  -->

                <a class="author-link" :href="`${user.url}`" target="_blank">{{user.author}} author page</a>
            </div>
            
        </div>
        <main>
          <div v-if="authorDataArrLength  >= endingIndex">
            <button class="btn" @click="handleLoadMore" >next8</button>
            <button class="btn" @click="handleLoadless">prev8</button>
          </div>
          <div v-else>
            <button class="btn">next8</button>
            <button class="btn" @click="handleLoadless">prev8</button>
          </div>
        </main>
    </div>
  </div>
</template>


<script setup>
const authorContainer = ref([]);
const loadMoreBtnDisabled = ref(false);
const isDarkMode = ref(false);

let startingIndex = ref(0) 
let endingIndex = ref(8)
let allAuthorDataArr = ref([])
let authorDataArr = ref([]);
let authorDataArrLength =ref(8)

definePageMeta({
  layout: 'navbar'
})

// fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
//     .then((res) => res.json())
//     .then((data) => {//assigning the data to authorDataArr
//         console.log('data', data);
//         allAuthorDataArr.value = data;
//         displayAuthors();   //you can extract a portion of the authors with the startingIndex and endingIndex variables by useing slice method
//     })
//     .catch((err) => {
//         console.error(`There was an error: ${err}`);
//        });

onMounted(async ()=>{
  try{
    //await is used to hold that line, until the data is fetched from the api
    const res=await fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json');
    const data=await res.json();
    allAuthorDataArr.value = data;
    console.log(' allAuthorDataArr.value', allAuthorDataArr.value);
        displayAuthors(); 
  } catch (err) {
    console.error(`There was an error: ${err}`);
  }
})

const searchText = ref('');
const displayAuthors = () => {
    const filteredAuthors = allAuthorDataArr.value.filter(user =>
        user.author.toLowerCase().includes(searchText.value.toLowerCase())
    );
    authorDataArr.value = [...filteredAuthors.slice(startingIndex.value, endingIndex.value)];
    console.log('authorDataArr.value', authorDataArr.value);
};

watchEffect(() => {
    displayAuthors();
});

const handleLoadMore = () => {
    startingIndex.value += 8;
    endingIndex.value += 8;
    authorDataArr.value =[]    
    displayAuthors()
      
    authorDataArrLength.value += authorDataArr.value.length
    // console.log('authorDataArrLength',authorDataArrLength.value);
    // console.log("startingIndex: ", startingIndex.value)
    // console.log("endingIndex: ", endingIndex.value)
    // console.log('------------------------------');
}
const handleLoadless=()=>{
  startingIndex.value -= 8;
    endingIndex.value -= 8;
    authorDataArr.value =[]    
    displayAuthors()

      if(authorDataArrLength.value===endingIndex.value){
    authorDataArrLength.value -= authorDataArr.value.length
    // console.log('authorDataArrLength',authorDataArrLength.value);
    // console.log("startingIndex: ", startingIndex.value)
    // console.log("endingIndex: ", endingIndex.value)
    // console.log('------------------------------');
  }
  else{
authorDataArrLength.value===endingIndex.value;
  }

}


const searchQuery = ref('');

const filteredAuthors = computed(() => {
  return authorDataArr.value.filter(user => user.author.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
console.log('filteredAuthors',filteredAuthors);
</script>

<style scoped>
.parent {
  /* max-width: 800px; */
  margin: auto;

}

.title {
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
}

#author-container {
  /* display: flex; */
  /* flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-evenly;
  
}

.author-card {

  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
}

.author-name {
  font-size: 18px;
  margin-bottom: 10px;
}

.author-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.purple-divider {
  background-color: #5a01a7;
  height: 5px;
  margin: 10px 0;
}

.bio {
  margin-bottom: 10px;
}

.author-link {
  color: #5a01a7;
  text-decoration: none;
  font-weight: bold;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px;
  color: white;
  font-size: 16px;
  background-color: #5a01a7;
  border: none;
  border-radius: 5px;
}

.dark-mode {
    height: 100vh;
    background-color: #333;
    color: #fff;
  }
</style>