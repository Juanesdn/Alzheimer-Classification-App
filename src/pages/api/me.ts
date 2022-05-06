import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '@/utils/auth0';

export default async function me(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await auth0.handleProfile(req, res, {});
  } catch (e) {
    if (e instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(e);
      res.status(500).end(e.message);
    }
  }
}
