
declare interface Message{
  id: number,
  title:string
  updatedAt: string,
  statusId: number,
  Like?:number,
  content:string,
  replies:[],
  url?:string
  createdAt:string
}
declare interface Replytype{
  id?:number
  UserId:number,
  NoteId:number,
  content:string,
  createdAt?:string
}
