import app from "./app";
import { prisma } from "./lib/prisma";
const PORT = process.env.PORT;



async function server() {
  try {
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });
}
server();
