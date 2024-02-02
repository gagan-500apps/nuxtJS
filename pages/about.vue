<template>
  <NuxtLayout name="defaultttt">
    <NuxtPage />
  </NuxtLayout>
  <div class="about-container">
    <h1 class="about-title">About</h1>
    <p class="about-info">
      Mantra’s journey began with an aspiration to become a dynamic & viable product designer facilitating all businesses
      and people worldwide. Staying true to its word, Mantra reached astounding milestones that further would become
      inspirational legends to several of its successors that followed. While Mantra keeps evolving into this newer world
      of software & business horizons, we are always rooted in our key tenets to provide cost-effective & sustainable
      solutions to all our stakeholders
    </p>

  </div>
  <div class="button-container">
    <button class="action-button" @click.prevent="gotohome">GoBacktoHome</button>
  </div>
</template>
<!-- //-------------------------------------------------------------------------------- -->
  
<script setup>
const flag = ref(null)
//-------------------------Middleware------------------- 
const gotohome = () => {
  navigateTo('/home')
}
</script>


  <!-- ---------------------------------------------------------------------------------------------------------------- -->
<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.about-title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.about-info {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  text-align: left;
  /* Align text to the left */
  margin-bottom: 15px;
  /* Add some space between paragraphs */
}

.info-label {
  font-weight: bold;
  margin-right: 10px;
  /* Add space between label and text */
  color: #3498db;
  /* Set color for label */
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
  