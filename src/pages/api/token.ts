
import  JWT from 'jsonwebtoken';
interface Token{
  ok:boolean,
  msg:string,
  err?:string}
export default  function handler(token?:string):Token 
{
  if (token==='null'||!token) return {msg:'null',ok:false}   
 if (token) {
  JWT.verify(token, 'Josiah', (err, data) => {
    if (err && err.message === 'invalid token') return {msg:"无效token",ok:false,err:err};
    if (err && err.message === 'jwt expired') return {msg:"token失效",ok:false,err:err};
    
  })  
 }
 
  return {ok:true,msg:"登录成功"}

}

