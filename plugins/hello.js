export default defineNuxtPlugin((argu) => {
    let evennum=[]
    argu.even=(maxnum)=>{
      evennum=[]
      for (let i = 0; i <= maxnum; i++) 
      {
        if(i%2==0)
        {
          evennum.push(i)
        }
      }
  return evennum
}
  })
  