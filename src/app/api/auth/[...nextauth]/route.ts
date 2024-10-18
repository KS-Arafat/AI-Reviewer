import authOpts from "@/lib/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOpts);
export { handler as GET, handler as POST };
