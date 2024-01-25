<template>

<NuxtLayout name="defaultttt">
    <NuxtPage />
  </NuxtLayout>



    <div class="parent">
        <h1 class="title">News Author Page</h1>

        <div id="author-container">

            
            <div class="author-card" v-for="(author, index ) in authorDataArr" :key="index">
                
                <h2 class="author-name">{{ author.author }}</h2>
                <img class="author-img" :src="`${author.image}`" alt="${author} avatar">
                <div class="purple-divider"></div>
                <p class="bio">{{ author.bio.length > 50 ? `${author.bio.slice(0, 50)}...` : author.bio }}</p>
                <!-- <p class="author-bio">{{author.bio}}</p>  -->
                <a class="author-link" href="`${url}`" target="_blank">{{author.author}}author page</a>
            </div>
            
        </div>
        <main>
            <button class="btn" @click="handleLoadMore" v-if="authorDataArr.length >= endingIndex">Load More Authors</button>
            <button class="btn" @click="handleLoadMore" disabled v-else>No More Authors</button>
        </main>
    </div>
</template>


<script setup>
const authorContainer = ref([]);
const loadMoreBtnDisabled = ref(false);

let startingIndex = ref(0)
let endingIndex = ref(8)
let allAuthorDataArr = ref([])
let authorDataArr = ref([]);

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) => res.json())
    .then((data) => {//assigning the data to authorDataArr
        console.log('data', data);
        allAuthorDataArr.value = data;
        displayAuthors();   //you can extract a portion of the authors with the startingIndex and endingIndex variables by useing slice method
    })
    .catch((err) => {
        console.error(`There was an error: ${err}`);
    });

const displayAuthors = () => {
    authorDataArr.value = [...authorDataArr.value, ...allAuthorDataArr.value.slice(startingIndex.value, endingIndex.value)]
    console.log("authorDataArr.value.length: ", authorDataArr.value.length)
    // console.log(authorDataArr.value)
}

const handleLoadMore = () => {
    startingIndex.value += 8;
    endingIndex.value += 8;
    displayAuthors()
    console.log("endingIndex: ", endingIndex.value)
}
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
</style>