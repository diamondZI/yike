

export default function Fetch(){
  
  async function GET(key:string){
      const res= await fetch(key,
       {
        method: 'GET',
        headers:new Headers({})
       }  
      ).then(res=>res.json());
      
      return res.data
  }
  async function POST<T>(key:string, value?:T){
    const res= await fetch(key,
      {
       method: 'POST',
       body:JSON.stringify(value)
      }  
     ).then(res=>res.json());
    return res
    }
  async function POST_NOTOKEN<T>(key:string, value:T){
    const res= await fetch(key,
      {
       method: 'POST',
       body:JSON.stringify(value)
      }  
     ).then(res=>res.json());
     return res
  }
  function UPDATA(){}
  function DELETE(){}
  return {GET,POST,UPDATA,DELETE,POST_NOTOKEN}
}
