import { initAuth0 } from '@auth0/nextjs-auth0';
// https://github.com/auth0/nextjs-auth0/blob/main/V1_MIGRATION_GUIDE.md
export default initAuth0({
  baseURL: 'http://localhost:3000',
  authorizationParams: {
    scope: 'openid profile',
  },
  clientID: process.env.clientID, // clientId
  clientSecret: process.env.clientSecret, // clientSecret
  clockTolerance: 10000,
  httpTimeout: 2500,
  issuerBaseURL: 'https://dev-pio-nwhk.us.auth0.com', // domain
  routes: {
    callback: '/api/callback', // redirectUri
    postLogoutRedirect: '/', // postLogoutRedirectUri
  },
  secret: process.env.secret, // cookieSecret
  session: {
    rollingDuration: 60 * 60 * 8,
  },
});
