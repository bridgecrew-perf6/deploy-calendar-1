import React from "react"

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Ноябрь", "Декабрь",]

const zodiacsAndMonths = [
	"Овен (с 21 марта по 20 апреля)",
	"Телец (с 21 по 21 мая)",
	"Близнецы (с 22 мая по 21 июня)",
	"Рак (с 22 июня по 22 июля)",
	"Лев (с 23 июля по 21 августа)",
	"Дева (с 22 августа по 23 сентября)",
	"Весы (с 24 сентября по 23 октября)",
	"Скорпион (с 24 октября по 22 ноября)",
	"Стрелец (с 23 ноября по 22 декабря)",
	"Козерог (с 23 декабря по 20 января)",
	"Водолей (с 21 января по 19 февраля)",
	"Рыбы (с 20 февраля по 20 марта)"
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
		return (<tr key={zodiac}>
			<td>{zodiac}</td>
			<td className="table-success">{success.join(", ")}</td>
			<td className="table-warning">{warning.join(", ")}</td>
			<td className="table-danger">{danger.join(", ")}</td>
		</tr>)
	})


	return (
		<div id="app" className="container">
			<h2 className="text-center">Когда лучше деплоить на продакшн, {months[date.getMonth()]} {date.getFullYear()} г.</h2>
			<div className="row">
				<div className="col">
					<table className="table text-center border border-dark">
						<thead>
							<tr>
								<td>
								Знак Зодиака
								</td>
								<td className="table-success">
								Благоприятные дни
								</td>
								<td className="table-warning">
								Нейтральные дни
								</td>
								<td className="table-danger">
								Неблагоприятные дни
								</td>
							</tr>
						</thead>
						<tbody>
							{zodiacs}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
