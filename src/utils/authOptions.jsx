import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // This is a temporary fix for prisma client.
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const  user = {id: 1, name: 'test', email: 'test@gmail.com'}
        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // });
        console.log("🚀 ~ authorize ~ user:", credentials)

        // if (!user || !(await compare(credentials.password, user.password!))) {
        //   return null;
        // }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET
};
