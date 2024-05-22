import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = NextAuth({
    
    // Configure one or more authentication providers
    providers: [
        // Providers.Email({
        //   server: process.env.EMAIL_SERVER,
        //   from: process.env.EMAIL_FROM,
        // }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
})

export { handler as GET, handler as POST }