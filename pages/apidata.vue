<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="item in allData" :key="item.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="item.images[0]" alt="Product Image" class="w-full h-56 object-cover object-center">
        <div class="p-4">
          <h2 class="text-gray-800 text-xl font-semibold">{{ item.title }}</h2>
          <p class="mt-2 text-gray-600">{{ item.description }}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-gray-700">{{ item.price }}</span>
            <span class="text-gray-700">{{ item.category.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'navbar'
  // middleware : 'login'
})

const allData=ref([])

onMounted(async ()=>{
  try{
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json();
  allData.value=data;
  console.log('alldata',allData.value);
} catch (err) {
    console.error(`There was an error: ${err}`);
  }
})


//for carousel optoin 
const currentIndex = ref(0);
console.log("currentIndex",currentIndex);


const currentImage = computed(() => allData.value.images[currentIndex]);
const nextImage = () => {
  if (currentIndex.value < allData.value.images.length - 1) {
    currentIndex.value++;
  }
};
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>