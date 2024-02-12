<template>
    <div>
      <header>
        <nav>
          <ul class="navbar">
            
            <a href="/home">
              <img src="https://i.ibb.co/LvmSGy2/logo-mantra-technologies-pvt-ltd.jpg" 
              alt="companylogo" class="company-logo">
            </a>
            <li><NuxtLink  to="/home">Home</NuxtLink></li> 
            <li><NuxtLink  to="/middleware">Middleware</NuxtLink></li> 
            
          <select style="background-color: black;" @click="goto($event.target.value)">
            <option>JavaScript</option>
            <option v-for="(item, index) in dropdown.slice(0)" :key="index" :value="item.route">{{ item.name }}</option>  
          </select>

  <!-- WITHOUT LOOP 
            <li>
            <button @click="opendropdown">JavaScript</button>
            <div v-if="togal">
                <div v-for="(index,items) in dropdown" :key="index">
                <button @click="goto(items.route)">{{items.name}}</button>
                <button @click="goto(dropdown[0].route)">  {{dropdown[0].name}} </button>
              <button @click="goto(dropdown[1].route)">{{dropdown[1].name}}</button><br>
              <button @click="goto(dropdown[2].route)">{{dropdown[2].name}}</button><br>
              <button @click="goto(dropdown[3].route)">{{dropdown[3].name}}</button><br>
              <button @click="goto(dropdown[4].route)">{{dropdown[4].name}}</button><br>
              <button @click="goto(dropdown[5].route)">{{dropdown[5].name}}</button><br>
            </div>
            </div> 
            </li>  -->
            
            <li><NuxtLink  to="/apidata">APIData</NuxtLink></li> 

            <li><NuxtLink  to="/quiz">TakeTest</NuxtLink></li> 
            <li><NuxtLink  to="/about">About</NuxtLink></li>
            <li><NuxtLink  to="/contact">Contact</NuxtLink></li> 
            <li><NuxtLink  to="/testing">Demo</NuxtLink></li> 

            <li><NuxtLink  to="/logout"
              class="text-white border cursor-pointer hover:bg-[#752222] hover: text-[15px] border-[#FFC107] rounded-[3px] px-6 py-2 font-medium shadow-[0_10px_16px_0_#070707]"
              >Logout</NuxtLink></li>
          </ul>
        </nav>
      </header>
      
      <slot />
    </div> 
  </template>


  <script setup>  
import {userForm } from '~/stores/dropDown';

const togal=ref(false)
const a=userForm()
const dropdown=a.dropDown
console.log('dropdown',dropdown);

const opendropdown=()=>{
  togal.value=true
}

const goto=(link)=>{
  navigateTo(link)
  togal.value=false
}

</script>
 

  <style scoped>
  /* Center the navbar items */
  .navbar {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 50px; Set a fixed height for the navbar */
    background-color: #010101; /* Set a background color for the navbar */
    color: #ebe9e9;
  }

  /* Style for each list item in the navbar */
  .navbar li {
    margin: 0 25px; /* Adjust the spacing between the list items */
    font-weight: 600;
    text-transform: capitalize;
    color: rgba(245, 245, 245, 0.951);
  }

  .navbar li:hover{
    color: white;
    text-transform: uppercase;
  }

  /* Optional: Add some styling for the links */
  #home-link,
  #about-link {
    text-decoration: none;
    color: #fffbfb; /* Set the text color */
    padding: 8px 12px; /* Add some padding to the links */
    border-radius: 4px; /* Add rounded corners */
    font-weight: bold; /* Make the letters bold */
  }

  #home-link:hover,
  #about-link:hover {
    background-color: #007BFF; /* Change the background color on hover */
    color: #fff; /* Change the text color on hover */
  }

  .company-logo {
  /* max-height: 100px; */
  /* Adjust the height as needed */
  /* max-width: 100%; */
  width: 270px;

}
  </style>
