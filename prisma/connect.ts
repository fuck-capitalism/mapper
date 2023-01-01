import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allUsers = await prisma.user.findMany({
	include: {
		posts: true,
		profile: true,
	},
})
console.log(allUsers)