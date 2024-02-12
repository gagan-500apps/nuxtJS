
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <p>Latitude: {{ location.latitude }}</p>
      <p>Longitude: {{ location.longitude }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
const error = ref(null);
const location = ref(null);

const getLocation = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    location.value = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

getLocation();
</script>
<!-- 
<template>

</template>

<script setup>

async function getLocation() {
  try {
    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      throw new Error('Geolocation is not supported by your browser');
    }

    // Use await to get the current position asynchronously
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    // Extract latitude and longitude from the position object
    const { latitude, longitude } = position.coords;

    // Return an object containing latitude and longitude
    return { latitude, longitude };
  } catch (error) {
    console.error('Error getting location:', error.message);
    throw error;
  }
}

// Usage
getLocation()
  .then(location => {
    console.log('Latitude:', location.latitude);
    console.log('Longitude:', location.longitude);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
</script> -->