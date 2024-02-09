export default defineNuxtRouteMiddleware((to, from) => {
    console.log('form',from.fullPath);
    console.log('to',to.fullPath);
   
    console.log(to.fullPath==='/home');
    console.log(from.fullPath==='/');
   

    //  if(to.fullPath==='/home' || to.fullPath==='/about' || to.fullPath==='/contact' || from.fullPath==='/')
    if(to.fullPath==='/home' && from.fullPath==='/')
     {
        // alert('Do Successful Login')
    console.log('home');
        return navigateTo('/login')
    
     }
    //  else{
    //     console.log('home');
    //     return navigateTo('/home')
    //  }
 })     