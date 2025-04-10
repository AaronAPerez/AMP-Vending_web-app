declare namespace NodeJS {
    interface ProcessEnv {
      // SMTP Settings
      SMTP_HOST: string;
      SMTP_PORT: string;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
      SMTP_FROM: string;
      SMTP_TO: string;
      
      // Auth Settings (for NextAuth)
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      
      // Database settings (for future implementation)
      DATABASE_URL?: string;
    }
  }