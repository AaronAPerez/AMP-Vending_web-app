import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
  
  interface User extends DefaultUser {
    role: string;
  }
}

// Extend the JWT type
declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}