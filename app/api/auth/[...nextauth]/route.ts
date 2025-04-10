import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// For production, replace with database lookup
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@ampvending.com",
    // Hashed password: "admin123"
    passwordHash: "$2a$10$GlZ8PuDOIsLwTySMPqRS8eMgF3PYQYYr6aXXBsEtTXCDn.5k3qNPy",
    role: "admin"
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Find user by email
        const user = users.find(user => user.email === credentials.email);
        
        // Verify password
        if (!user || !(await bcrypt.compare(credentials.password, user.passwordHash))) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
    signOut: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    // Add role to token
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    // Add role to session
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };