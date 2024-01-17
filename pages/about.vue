<template>
    <div class="about-container">
      <h1 class="about-title">About</h1>
      <p class="about-info">
        <span class="info-label">Company:</span> Mantra Technologies
      </p>
      <p class="about-info">
        <span class="info-label">Address:</span>
        I & II Floor, Vertex Corporate Building, opp. Lane to Hitex Arch, Jubilee Enclave, Madhapur, Hyderabad, Telangana 500081
      </p>
    </div>
    <div> 
      <button @click.prevent="gotohome">GoBacktoHome</button>
      <button @click.prevent="direction">Direction</button>
    </div>
  </template>
<!-- //-------------------------------------------------------------------------------- -->
  <script setup>

const flag=ref(null)

const gotohome=()=>{
navigateTo('/')
}

const direction= ()=>{
<one-direction />
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
    text-align: left; /* Align text to the left */
    margin-bottom: 15px; /* Add some space between paragraphs */
  }
  
  .info-label {
    font-weight: bold;
    margin-right: 10px; /* Add space between label and text */
    color: #3498db; /* Set color for label */
  }
  </style>
  