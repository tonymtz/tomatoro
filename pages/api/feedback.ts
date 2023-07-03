import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { CMS_URL } from '~/utils/config'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body['data'] as Feedback
    await axios.post<CmsSingleEntryResponse<Feedback>>(`${ CMS_URL }/feedbacks`, { data })
  }
  res.end()
}
