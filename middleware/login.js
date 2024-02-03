export default defineNuxtRouteMiddleware((to, from) => {
    console.log('form',from.fullPath);
    console.log('to',to.fullPath);
   
     if(from.fullPath==='/' || from.fullPath==='/home')
     {
        return navigateTo("/login")
     }
 })