
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
declare interface Replytype{
  UserId:number,
  NoteId:number,
  content:string,
  createdAt?:string
}
