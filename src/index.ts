import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

async function main() {
  // const getAllUsers = await prisma.user.findMany();
  // console.log(getAllUsers);
  // const postUser = await prisma.user.create({
  //   data: {
  //     email: "main52@gmail.com",
  //     name: "Main",
  //     role: "stdent",
  //   },
  // });
  // console.log(postUser);
  app.listen(port, () => {
    console.log(`server running at ${port}`);
  });
}
main();
