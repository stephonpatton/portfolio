import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div class="nav-cont">
			<ul className="nav-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/tech">Tech</Link>
				</li>
				<li>
					<Link to="/resources">Resources</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
