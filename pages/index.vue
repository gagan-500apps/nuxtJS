<template>

  <div class="bg-gradient-to-r from-blue-800 to-blue-500 h-screen text-white">
    <!-- <header class="py-4">
      <nav class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">MANTRA TECHNOLOGIES</h1>
      </nav>
    </header> -->
    


  <a href="" class=" bottom-0 left-0 mb-8 ml-8">
    <img src="https://mantragroup.com/images/header-hero-image.svg" 
    alt="Whats-App-Image-2024-02-05-at-1-11-27-PM" border="0">
  </a>


    <main class="container mx-auto flex flex-col items-end justify-end ml-1 mt-30">
      <div class="text-center">
        <h2 class="text-3xl font-semibold mb-4">Welcome to MANTRA</h2>
        <p class="text-lg">Explore our services and join us today!</p>
      </div>

      <div class="flex space-x-6 mt-8 mr-6">
        <div>
          <NuxtLink to="/login" class="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition block">
            Login</NuxtLink>
        </div>
        <div>
          <NuxtLink class="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition block" to="/signup">
            Sign Up</NuxtLink>
        </div>
      </div>
      <div >
        <p class="text-sm mt-3 mr-16">Need help? <NuxtLink to="/contactUS" class="text-yellow-300">Contact us</NuxtLink></p>
      </div>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Gradient background */
.bg-gradient-to-r {
  background: linear-gradient(to left, #245dbf, #155bd5 );
              /* linear-gradient(to left, #1c3ab6, #155bd5 ) */
              /* linear-gradient(to left, #155bd5, #155bd5 ) */
}

a:hover {
  text-decoration: underline;
}
</style>
