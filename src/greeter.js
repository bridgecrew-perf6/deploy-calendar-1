import React, {useState} from "react"
import PropTypes from "prop-types"

export default function Greeter(props) {

	const [state, setState] = useState({name: ""})
	const update = (name) => setState({name: name})

	return (
		<div id="app" className="container">
			<h2 className="text-center">Your fist React+Bootstrap app</h2>
			<div className="row">
				<div className="col-4 text-right pt-4">
					<p>Your name:</p>
				</div>
				<div className="col align-middle">
					<input className="form-control mt-4" placeholder="Enter your name ..." type="text" id="username" onKeyUp={(event) =>update(event.target.value)}/>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-3">
					&nbsp;
				</div>
				<div className="col">
					<p className="my-style mt-2">{state.name.length > 0 ? `Hello, ${state.name}! Your number is ${props.calc.hash(state.name)}.` : ""}</p>
				</div>
			</div>
		</div>
	)
}

Greeter.propTypes = {
	calc: PropTypes.object.isRequired
}
