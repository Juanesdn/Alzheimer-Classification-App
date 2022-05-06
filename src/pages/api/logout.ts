import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '@/utils/auth0';

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await auth0.handleLogout(req, res);
  } catch (e) {
    if (e instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(e);
      res.status(500).end(e.message);
    }
  }
}
