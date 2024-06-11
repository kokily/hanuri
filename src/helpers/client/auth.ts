import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: '아이디',
          type: 'text',
          placeholder: '아이디',
        },
        password: {
          label: '비밀번호',
          type: 'password',
        },
      },
      async authorize(credentials, _) {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/login`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          },
        );

        const user = await response.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
