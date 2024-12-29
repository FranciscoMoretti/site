import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

function createPrismaClient() {
  if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    return null
  }

  const libsql = createClient({
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: `${process.env.TURSO_AUTH_TOKEN}`,
  })

  const adapter = new PrismaLibSQL(libsql)
  const prisma = new PrismaClient({ adapter })
  return prisma
}
export const db = createPrismaClient()
