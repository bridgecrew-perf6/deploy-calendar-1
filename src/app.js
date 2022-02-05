import React from "react"
import PropTypes from "prop-types"

import Zodiac from "./zodiac"
import getDates from "./get-dates"



export default function App(props) {

	return (
		<div id="app" className="container text-center">
			<h2>Когда лучше деплоить на продакшн, {props.month}<sup>*</sup></h2>
			<p>* - Астрологический прогноз благоприятных дат для дежурного администратора</p>
			<div className="row mx-1">
				<div className="col-3 border border-dark">Знак</div>
				<div className="col-3 bg-success text-light border border-dark">Супер</div>
				<div className="col-3 bg-warning text-dark border border-dark">Можно</div>
				<div className="col-3 bg-danger text-light border border-dark">Не стоит</div>
			</div>
			{
				props.zodiacsAndMonths.map((zodiac) =>
					<Zodiac key={zodiac.title} title={zodiac.title} range={zodiac.dates} dates={getDates(props.date)}/>)
			}
		</div>
	)
}

App.propTypes = {
	date: PropTypes.object.isRequired,
	month: PropTypes.string.isRequired,
	zodiacsAndMonths: PropTypes.array.isRequired
}
