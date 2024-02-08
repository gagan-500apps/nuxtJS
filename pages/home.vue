<template>
  <div>
    <h2 class="fw-bold text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-10">
      <span class="highlight-text">Go to the next level with</span> <span class="blue-text">MANTRA</span>
    </h2>

    <p class="col-lg-9 mx-auto text-center mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl font-extralight">
      Get all 39 apps at $14.99 - Join the SaaS Revolution - 500apps, $14.99/user flat pricing, 24/5 Support <br> (Phone/Chat/Email/Onboarding)
    </p>

    <img
      loading="lazy"
      width="926"
      height="434"
      src="https://mantragroup.com/images/500apps-banner-1.png"
      class="mt-10 mx-auto md:ml-0 lg:ml-96"
      alt="light bg"
    />

    <div class="flex flex-col items-center md:flex-row justify-center gap-4 mt-10">
      <a href=" " target="_blank" class="button">
        Get Started
      </a>
      <a href="/contactUS"  class="button">
        Book a Demo
      </a>
    </div>

    <div class="mt-10 md:mt-20 lg:flex lg:items-center lg:justify-between">
      <div class="md:ml-6 lg:ml-20 lg:mr-6">
        <a href="">
          <img
            src="https://images.snaphunt.com/837f0a31-975a-47d0-9942-8b3302f7f324/837f0a31-975a-47d0-9942-8b3302f7f324.png"
            alt="mantra logo"
            class="company-logo mx-auto md:mx-0 lg:mx-auto lg:max-h-20"
          />
        </a>
        <p class="text-center mt-4 md:text-left md:ml-4">
          The phenomenal innovation and unparalleled technical <br> expertise define Mantra’s position in digital <br> transformation
        </p>
      </div>

      <!-- for products -->
      <!-- <div>
        <h1>Our Products</h1>
        <ul>
          <li>500apps</li>
          <li>Agile CRM</li>
          <li>Garpe</li>
          <li>onswitch</li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'navbar',
  // middleware: 'login'
})
</script>

<style scoped>
.fw-bold {
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px; /* Add a margin at the bottom */
}

.highlight-text {
  font-size: 1.5em; 
  display: inline-block;
}

.blue-text {
  color: blue;
  font-size: 1.5em; 
  display: inline-block;
}

.col-lg-9 {
  margin: 0 auto; /* Center the paragraph */
  text-align: center;
}

/* to make logo responsive */
.company-logo {
  width: 100%; 
  max-width: 270px; 
  height: auto; 
}

.button {
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  border: 2px solid #0c0c0c;
  background-color: #f0efec;
  color: #0c0c0c;
  font-size: 15px;
  padding: 14px 18px;
  border-radius: 5px;
  margin: 10px;
  display: inline-block;
}

.button:hover {
  background-color: #020202;
  border-color: #3c8cd6;
  color: #fff;
  box-shadow: 0 10px 16px 0 #070707;
}
</style>
