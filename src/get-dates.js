function randomIntFromInterval(length) {
	return Math.floor(Math.random() * length)
}

export default function getDates(date) {
	const daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
	const days = [...Array(daysInCurrentMonth + 1).keys()].slice(1, daysInCurrentMonth + 1)

	const types = [[], [], []]
	days.forEach((day) => types[randomIntFromInterval(types.length)].push(day))
	return types

}