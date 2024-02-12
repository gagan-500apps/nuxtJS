  <template>
      <div class="about-container">
        <h1 class="about-title">Contact</h1>
        <p class="about-info">
          <span class="info-label">Phno:</span> 9191919191
        </p>
        <p class="about-info">
          <span class="info-label">Address:</span>
          I & II Floor, Vertex Corporate Building, opp. Lane to Hitex Arch, Jubilee Enclave, Madhapur, Hyderabad, Telangana 500081
        </p>
        <div class="button-container"> 
          
          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.6093878790284!2d78.37936276846132!3d17.450533031367666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9317291d16fd%3A0xf45a6750ef4da011!2sMANTRA!5e0!3m2!1sen!2sin!4v1707718859434!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

          <button class="action-button" @click.prevent="direction">GetDirection</button>

        </div>
      </div>
    </template>


    <script setup>

  definePageMeta({
    layout: 'navbar'
    // middleware : 'login'
  })




    const flag=ref('false')
  const direction= ()=>{
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.6093878790284!2d78.37936276846132!3d17.450533031367666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9317291d16fd%3A0xf45a6750ef4da011!2sMANTRA!5e0!3m2!1sen!2sin!4v1707718859434!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    // window.open('https://maps.app.goo.gl/29AWTaWkdKWYC5DW8', '_blank'); 

  const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.6093878790284!2d78.37936276846132!3d17.450533031367666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9317291d16fd%3A0xf45a6750ef4da011!2sMANTRA!5e0!3m2!1sen!2sin!4v1707718859434!5m2!1sen!2sin";
  window.open(url, "_blank");  
  }

  </script>
    
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
      color: #080808;
    }
    
    .about-info {
      font-size: 16px;
      color: #0a0909;
      line-height: 1.6;
      text-align: left; /* Align text to the left */
      margin-bottom: 15px; /* Add some space between paragraphs */
      margin-top: 4%;
    }
    
    .info-label {
      font-weight: bold;
      margin-right: 10px; /* Add space between label and text */
      color: #3498db; /* Set color for label */
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
    }
    </style>
    