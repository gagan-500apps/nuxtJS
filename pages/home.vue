 <template>
<NuxtLayout name="navbar">
    <NuxtPage />
  </NuxtLayout>
  <h1>Home</h1>
  
</template>

<script setup>

definePageMeta({
  middleware : 'login'
})


</script>


<style></style> 

