declare interface Message{
  // id: string,
  author:string
  time: string,
  state: string,
  Like:number,
  content:string,
  Reply:number,
}
declare interface Reply{
  name:string, 
  Headphoto:string,
  time: string  ,
  content:string
}
