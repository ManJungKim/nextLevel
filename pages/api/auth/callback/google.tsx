import type { NextApiRequest, NextApiResponse } from 'next'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const session = await getSession({ req });
  console.log('session :', session); 
  console.log('res :', res);
  res.status(200).redirect('http://localhost:3000');
}


// export default async (req, res) => {
//   
//   res.send(JSON.stringify(session, null, 2))
// }