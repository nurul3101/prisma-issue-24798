import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

export const prisma = new PrismaClient({
  omit: {
    user: {
      password: true,
    },
  },
}).$extends(withAccelerate());

async function main() {
  for (let i = 0; i < 10000; i++) {
    const newUser = await prisma.user.create({
      data: {
        email: `test+${Math.random()}@prisma.io`,
        name: 'Alice',
        password: 'password',
        id: i,
      },
    });

    const findUser = await prisma.user.findUnique({
      where: {
        id: i,
      },
    });

    console.log(findUser);
  }
}

main();
