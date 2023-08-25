import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()



async function main() {
  console.log(`Start seeding ...`)
    const user = await prisma.wine_cet4_word.findMany()
  console.log(`Seeding finished. `, user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
