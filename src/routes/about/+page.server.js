import { PrismaClient } from "@prisma/client";
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const prisma = new PrismaClient();

	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true,
		},
	})

	console.log(allUsers)

	console.log(params)
	try {
		const res = await fetch("https://api.ipify.org?format=json")
		// console.log(await res.text())
		const data = await res.json()
		console.log(data)
		data.users = allUsers
		return data
	} catch (e) {
		console.log("oops")
		console.error(e)
	}
}