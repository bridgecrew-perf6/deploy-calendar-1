import React from "react"


function randomIntFromInterval() { // min and max included
	return Math.floor(Math.random() * (3) + 1)
}

function generate() {
	const today = new Date()
	const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
	const days = [...Array(daysInCurrentMonth + 1).keys()].slice(1, daysInCurrentMonth + 1)

	const success = []
	const warning = []
	const danger = []
	days.forEach((day) => {
		switch (randomIntFromInterval()) {
		case 1: success.push(day)
			break
		case 2: warning.push(day)
			break
		case 3: danger.push(day)
			break
		default:
			break
		}
	})

	return [
		success.join(", "),
		warning.join(", "),
		danger.join(", ")
	]

}


export default function App() {

	const zodiacs = [
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
		"Рыбы (с 20 февраля по 20 марта)",
	].map((zodiac) => {
		const [success, warning, danger] = generate()
		return (<tr key={zodiac}>
			<td>{zodiac}</td>
			<td className="table-success">{success}</td>
			<td className="table-warning">{warning}</td>
			<td className="table-danger">{danger}</td>
		</tr>)
	})


	return (
		<div id="app" className="container">
			<h2 className="text-center">Когда лучше деплоить на продакшн</h2>
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
