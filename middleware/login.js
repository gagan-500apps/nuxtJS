export default defineNuxtRouteMiddleware((to, from) => {
    console.log('form',from.fullPath);
    console.log('to',to.fullPath);
   
    console.log(to.fullPath==='/home');
    console.log(from.fullPath==='/login');
   

     if(to.fullPath==='/home' && from.fullPath==='/')
     {
        alert('Do Successful Login')
        return navigateTo("/login")
     }
 })     