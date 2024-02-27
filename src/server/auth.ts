import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "./services/userService";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log(profile, account, profile);
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log(session, user);
      session.user.id = "1234";
      return session;
    },
  },
  pages: {
    signIn: "/login",
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
        console.log(response);

        let user = {
          id: response.data.id,
          name: response.data.username,
          image: response.data.image,
          email: response.data.email,
        };
        console.log(user);

        return user;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
