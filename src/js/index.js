//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap/scss/bootstrap.scss";

//include your index.scss file into the bundle
import "../styles/index.scss";

SimpleCounter.propTypes = {
	NumberFour: PropTypes.number,
	NumberThree: PropTypes.number,
	NumberTwo: PropTypes.number,
	NumberOne: PropTypes.number
};

function SimpleCounter(props) {
	return (
		<div className="CounterDiv">
			<div>
				<i className="fas fa-history" />
			</div>
			<div className="four">{props.NumberFour % 10}</div>
			<div className="three">{props.NumberThree % 10}</div>
			<div className="two">{props.NumberTwo % 10}</div>
			<div className="one">{props.NumberOne % 10}</div>
		</div>
	);
}

let counter = 0;
setInterval(function() {
	var four = Math.floor(counter / 1000);
	var three = Math.floor(counter / 100);
	var two = Math.floor(counter / 10);
	var one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;

	//render your react application
	ReactDOM.render(
		<SimpleCounter
			NumberOne={one}
			NumberTwo={two}
			NumberThree={three}
			NumberFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
