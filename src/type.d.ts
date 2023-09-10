// Limport type {User} from '@prisma/client';


declare interface Message{
  id: number,
  title:string
  updatedAt: string,
  statusId: number,
  Like?:number,
  content:string,
  replies:Replytype[],
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
declare type initiastate={
  value:number
}
