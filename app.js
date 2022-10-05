const express=require('express');
const app=express();



app.listen(6000,async (req,res)=>{
   try{
console.log('success')
   }catch(e){
    console.log('err',e)
   }
})