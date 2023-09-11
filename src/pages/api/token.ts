
import  JWT from 'jsonwebtoken';
interface Token{
  ok:boolean,
  msg:string,
  err?:string}
export default  function handler(token?:string)
{
  let tokenMSG:{ok:boolean,msg?:string,err?:Error}={ok:true,msg:"登录成功"}
 if (token==='null'||!token) tokenMSG={msg:'token不存在',ok:false}   
 if (token) {
  JWT.verify(token, 'Josiah', (err, data) => {
    if (err && err.message === 'invalid token') 
    tokenMSG={msg:"无效token",ok:false,err:err};
    if (err && err.message === 'jwt expired') 
    tokenMSG={msg:"token失效",ok:false,err:err};
    if (!err){
      tokenMSG={ok:true,msg:"验证成功"}
    }
  })  
 }
 return tokenMSG
}

