'use server';

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// Get latest products
export async function getLatestProducts() {
    const prisma = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL!,
    }),
});

    const data = await prisma.product.findMany({
        take: 4,
        orderBy: {
            createdAt: "desc",
        },
    });


    return convertToPlainObject(data);
}