import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { prisma } from "./lib/server/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        password: { type: "password" },
      },
      async authorize(credentials) {
        const password = credentials?.password;

        if (typeof password !== "string" || password.length < 1) {
          return null;
        }

        const admin = await prisma.user.findFirst();

        if (!admin) {
          return null;
        }

        const valid = await bcrypt.compare(password, admin.password);

        if (!valid) {
          return null;
        }

        return {
          id: admin.id,
        };
      },
    }),
  ],
});
