import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);

  const postUser = await prisma.user.create({
    data: {
      email: "main52@gmail.com",
      name: "Main",
      role: "stdent",
    },
  });
  console.log(postUser);
}

main();
