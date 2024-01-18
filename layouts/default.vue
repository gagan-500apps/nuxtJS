<template>
  <div>
    <header>
      <nav>
        <ul class="navbar">
          <li><NuxtLink  to="/">Home</NuxtLink></li>
          <li><NuxtLink  to="/about">About</NuxtLink></li>
          <li><NuxtLink  to="/contact">Contact</NuxtLink></li>
   
        </ul>
      </nav>
    </header>
    <slot />
  </div> 

   
</template>

<style scoped>
/* Center the navbar items */
.navbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; /* Set a fixed height for the navbar */
  background-color: #cac6c6; /* Set a background color for the navbar */
}

/* Style for each list item in the navbar */
.navbar li {
  margin: 0 15px; /* Adjust the spacing between the list items */
}

/* Optional: Add some styling for the links */
#home-link,
#about-link {
  text-decoration: none;
  color: #030303; /* Set the text color */
  padding: 8px 12px; /* Add some padding to the links */
  border-radius: 4px; /* Add rounded corners */
  font-weight: bold; /* Make the letters bold */
}

#home-link:hover,
#about-link:hover {
  background-color: #007BFF; /* Change the background color on hover */
  color: #fff; /* Change the text color on hover */
}
</style>
