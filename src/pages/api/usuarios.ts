// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  nome: string,
  email: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {nome: "João", email: 'jjjoao@gmail.com'},
    {nome: "Maria", email: 'mmmaria@gmail.com'}
  ])
}
