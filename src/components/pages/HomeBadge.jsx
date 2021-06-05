import React from 'react'
import { Link } from 'react-router-dom'

import astro from './../../images/logo.svg'
import logo from './../../images/conf.svg'
import './Styles/HomeBadge.css'

function HomeBadge() {
	return (
		<div className="Home">
			<dir className="col-text">
				<img src={logo} alt="Platzi conf logo"/>
				<div>
					<h1>BADGE MANAGEMENT SYSTEM</h1>
					<Link className="btn btn-primary" to="/badges">Start</Link>
				</div>
			</dir>
			<dir className="col-img">
				<img src={astro} alt="Astronauta"/>
			</dir>
		</div>
	)
}

export default HomeBadge;