import NextAuth, { type AuthOptions, type User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const dbUser = {
          id: "5",
          password: "test",
          email: "t@t",
          createdAt: "19/02/2024",
        };

        //Verify Password here
        //We are going to use a simple === operator
        //In production DB, passwords should be encrypted using something like bcrypt...
        if (dbUser && dbUser.password === credentials.password) {
          const dbUserWithoutPassword: User = {
            id: dbUser.id,
            email: dbUser.email,
          };
          return dbUserWithoutPassword;
        }

        return null;
      },
    }),
    GoogleProvider({
      name: "Google",
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
