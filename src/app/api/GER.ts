import {NextApiResponse,NextApiRequest} from 'next';
export default async function handler(req:NextApiRequest,res:NextApiResponse){
await res.status(200).send("ok");
}
