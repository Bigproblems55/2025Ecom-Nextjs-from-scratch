import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
});
   
    await prisma.product.deleteMany();
    await prisma.product.createMany({
      data: sampleData.products,
    });
    
    console.log("Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });