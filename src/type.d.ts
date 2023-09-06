declare interface Message{
  id: number,
  title:string
  updatedAt: string,
  statusId: number,
  Like?:number,
  content:string,
  Reply:[],
  url?:string
  createdAt:string
}
declare interface Reply{
  name:string, 
  Headphoto:string,
  time: string  ,
  content:string
}
