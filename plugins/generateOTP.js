export default defineNuxtPlugin((argu) => {
    
    argu.otp=(length)=>{
      let otpnum='';
      for (let i = 0; i < length; i++) 
      {
       otpnum += Math.floor(Math.random()*10).toString();
      }
  return otpnum
}
  })
  