'use client'

interface User{
  name:String 
  email:String
  sex?:String
  password:String
  birthday_Date?: Date 
  state?:String
}

export default function page(){
  const a=async () =>{
    let data=await fetch('hello',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
     
    }).then(res=>res.json())  
    console.log(data);
    
  }
  return <>
       <button onClick={()=>a()}>11111</button>
      </>
}
