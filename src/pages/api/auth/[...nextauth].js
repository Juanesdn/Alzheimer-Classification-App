/* eslint-disable no-param-reassign */
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';
import CredentialsProvider from 'next-auth/providers/credentials';

// eslint-disable-next-line import/extensions
import { loginUser } from '../../../data/api';
import clientPromise from '../../../lib/mongodb';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'test@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      authorize: async (credentials) => {
        const res = await loginUser(credentials);
        if (res.user) {
          return { status: 'success', data: res };
        }
        const errorMessage = res.message;
        // Redirecting to the login page with error message          in the URL
        throw new Error(`${errorMessage}&email=${credentials.email}`);
      },
    }),
    /*     EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }), */
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: 'secret-password',
  jwt: {
    secret: 'secret-password',
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && account.provider === 'credentials') {
        if (user) {
          token.id = user.data.user.id;
          token.name = user.data.user.name;
          token.email = user.data.user.email;
          token.picture = user.data.user.picture;
          token.accessToken = user.data.tokens.access.token;
          token.refreshToken = user.data.tokens.refresh.token;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.user = { ...session.user, userId: token.id };
      return session;
    },
  },
});
