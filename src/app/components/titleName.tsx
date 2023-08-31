export default function titleName({title,message}:{title:string,message:string}){
 return <div className=" flex flex-col items-center p-2">
    <h1 className="text-5xl m-6 font-bold">{title}</h1>
    <h2  className="text-sm">{message}</h2>  
 </div> 
}
