import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "./src/server/services/userService";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login/error",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const response = await userService.authenticate(email, password);
        let user = {
          id: response.data.user.id,
          name: response.data.user.name,
          image: response.data.user.image,
          email: response.data.user.email,
        };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile): any {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: profile.role ? profile.role : "user",
          password: profile.password
            ? profile.password
            : "oath-password-less-login",
        };
      },

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
