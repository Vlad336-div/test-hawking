// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  count: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const minute = parseInt(req.body.minute)/2
    const sms = parseInt(req.body.sms)/2
    const internet = parseInt(req.body.internet)/2
    const socialVk = req.body.social.vk ? 20 : 0;
    const socialInstagram = req.body.social.instagram ? 20 : 0;
    const socialTiktok = req.body.social.tiktok ? 20 : 0;
    const socialFacebook = req.body.social.facebook ? 20 : 0;
    const countRate = ((minute+sms+internet+1)*100 + (socialVk+socialFacebook+socialTiktok+socialInstagram)).toString()
    res.status(200).json({ count: countRate })
  }
}
