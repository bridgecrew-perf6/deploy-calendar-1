import React from "react"
import PropTypes from "prop-types"

export default function Zodiac(props) {

	return (<div key={props.title} className="row mx-1">
		<div className="col-3 border border-dark">
			<p className={"fw-bold fs-1"}>{props.title}</p>
			<p>({props.range})</p>
		</div>
		<div className="col-3 bg-success text-light border border-dark">{props.dates[0].join(", ")}</div>
		<div className="col-3 bg-warning text-dark border border-dark">{props.dates[1].join(", ")}</div>
		<div className="col-3 bg-danger text-light border border-dark">{props.dates[2].join(", ")}</div>
	</div>)
}

Zodiac.propTypes = {
	title: PropTypes.string.isRequired,
	range: PropTypes.string.isRequired,
	dates: PropTypes.array.isRequired
}


