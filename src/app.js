import React from "react"

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Ноябрь", "Декабрь"]


const zodiacsAndMonths = [
	{title: "♈", dates: "21 марта - 20 апреля"},
	{title: "♉", dates: "21 апреля - 21 мая"},
	{title: "♊", dates: "22 мая - 21 июня"},
	{title: "♋", dates: "22 июня - 22 июля"},
	{title: "♌", dates: "23 июля - 21 августа"},
	{title: "♍", dates: "22 августа - 23 сентября"},
	{title: "♎", dates: "24 сентября - 23 октября"},
	{title: "♏", dates: "24 октября - 22 ноября"},
	{title: "♐", dates: "23 ноября - 22 декабря"},
	{title: "♑", dates: "23 декабря - 20 января"},
	{title: "♒", dates: "21 января - 19 февраля"},
	{title: "♓", dates: "20 февраля - 20 марта"}
]

function randomIntFromInterval(length) {
	return Math.floor(Math.random() * length)
}

function generate(date) {
	const daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
	const days = [...Array(daysInCurrentMonth + 1).keys()].slice(1, daysInCurrentMonth + 1)

	const types = [[], [], []]
	days.forEach((day) => types[randomIntFromInterval(types.length)].push(day))
	return types
}


export default function App() {

	const date = new Date()

	const zodiacs = zodiacsAndMonths.map((zodiac) => {
		const [success, warning, danger] = generate(date)
		return (<div key={zodiac.title} className="row mx-1 text-center">
			<div className="col-3 border border-dark">
				<p className={"fw-bold fs-1"}>{zodiac.title}</p>
				<p>({zodiac.dates})</p>
			</div>
			<div className="col-3 bg-success text-light border border-dark">{success.join(", ")}</div>
			<div className="col-3 bg-warning text-dark border border-dark">{warning.join(", ")}</div>
			<div className="col-3 bg-danger text-light border border-dark">{danger.join(", ")}</div>
		</div>)
	})

	return (
		<div id="app" className="container">
			<h2 className="text-center">Когда лучше деплоить на продакшн, {months[date.getMonth()]} {date.getFullYear()} г.</h2>
			<div className="row mx-1 text-center">
				<div className="col-3 border border-dark">Знак Зодиака</div>
				<div className="col-3 bg-success text-light border border-dark">Супер</div>
				<div className="col-3 bg-warning text-dark border border-dark">Можно</div>
				<div className="col-3 bg-danger text-light border border-dark">Не стоит</div>
			</div>
			{zodiacs}
		</div>
	)
}
