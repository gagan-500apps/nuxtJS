export default defineNuxtRouteMiddleware((to, form) => {
   const flag=true
   alert('Are you sure to Logout')
    if(flag)
    {
       return navigateTo("/")
    }
})