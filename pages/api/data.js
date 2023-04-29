// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from './data/dataJSON.js'
export default function handler(req, res) {
  res.status(200).json({ data: data })
}
