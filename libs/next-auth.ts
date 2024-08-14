import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prismadb from './prismadb';
import { compare } from 'bcrypt';
import { User } from '@prisma/client';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUTH_KEY,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prismadb.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const isPasswordValid = await compare(credentials.password, user.hashedPassword);

        if (!isPasswordValid) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // فرض می‌کنیم که user همیشه وجود دارد
      const { id, role } = user as User;
      return {
        ...token,
        userId: id,
        userRole: role,
      };
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          userId: token.userId,
          userRole: token.userRole,
        },
      };
    },
  },
};
