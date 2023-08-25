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
    let data=await fetch('api/user/create',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
     name:"qin",
     email:'2580456922@qq.com',
     password:'password'
   }as User )
    }).then(res=>res.json())  
    console.log(data);
    
  }
  return <>
       
      </>
}
