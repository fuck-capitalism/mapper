/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	console.log(params)
	try {
		const res = await fetch("https://api.ipify.org?format=json")
		// console.log(await res.text())
		const data = await res.json()
		console.log(data)
		return data
	} catch (e) {
		console.log("oops")
		console.error(e)
	}
}