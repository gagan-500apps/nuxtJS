<template>
  <div class="bg-gradient-to-r from-blue-800 to-blue-500 h-screen text-white">
    <header class="py-4">
      <nav class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">MANTRA TECHNOLOGIES</h1>
      </nav>
    </header>

    <main class="container mx-auto flex flex-col items-center justify-center h-full">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold mb-4">Welcome to MANTRA</h2>
        <p class="text-lg">Explore our services and join us today!</p>
      </div>

      <div class="flex space-x-4">
        <div>
          <NuxtLink to="/login" class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition block">Login</NuxtLink>
          <!-- <li><NuxtLink  to="/login">Login</NuxtLink></li>  -->
          <!-- <li><NuxtLink  to="/signup">SignUp</NuxtLink></li>  -->
        </div>
        <div>
          <NuxtLink class="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition block" to="/signup">Sign Up</NuxtLink>
        </div>
      </div>

      <div class="mt-16">
        <p class="text-sm">Need help? <NuxtLink to="/contact" class="text-yellow-300">Contact us</NuxtLink></p>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Gradient background */
.bg-gradient-to-r {
  background: linear-gradient(to right, #3182CE, #2C5282);
}

/* Hover effect on links */
a:hover {
  text-decoration: underline;
}
</style>
