<template>
  <!-- <NuxtLayout name="navbar">
    <NuxtPage />
  </NuxtLayout> -->
  <div class="about-container">
    <h1 class="about-title">About</h1>
    <p class="about-info">
      Mantra’s journey began with an aspiration to become a dynamic & viable product designer facilitating all businesses and people worldwide. Staying true to its word, Mantra reached astounding milestones that further would become inspirational legends to several of its successors that followed. While Mantra keeps evolving into this newer world of software & business horizons, we are always rooted in our key tenets to provide cost-effective & sustainable solutions to all our stakeholders.
    </p>
<p>Throughout its journey, the Mantra family successfully included 300+ steadfast personnel under its wings and achieved ground-breaking wins like 500apps, with unwavering integrity driven by their hard work. Through the infinity suite, 500apps, Mantra successfully helped small and medium-scale businesses reach newer and greater heights.
</p> 

  </div>
  <div class="button-container">
    <button class="action-button" @click.prevent="gotohome">GoBacktoHome</button>
  </div>
</template>
<!-- //-------------------------------------------------------------------------------- -->
  
<script setup>

//-------------------------Middleware------------------- 

definePageMeta({
  layout: 'navbar',
  // middleware: 'login'
  middleware: 'login'

})



const gotohome = () => {
  navigateTo('/home')
}
</script>


  <!-- ---------------------------------------------------------------------------------------------------------------- -->
<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2%;
  padding: 20px;
  text-align: center;
}

.about-title {
  font-size: 36px;
  font-weight: bold;
  color: #070707;
  
}

.about-info {
  font-size: 16px;
  color: #000000;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 15px;
  margin-top: 4%;}

.info-label {
  font-weight: bold;
  margin-right: 10px;
  color: #3498db;
}

.button-container {
  display: flex;
  justify-content: center;
}

.action-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
}

.action-button:hover {
  background-color: #007bb5;
}</style>
  