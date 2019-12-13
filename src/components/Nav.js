import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { animateScroll as scroll } from 'react-scroll';
const Nav = () => {
	return (
		<div class="nav-cont">
			<div class="nav-bar">
				<ul className="nav-list">
					<div className="name">
						<li>Stephon Patton</li>
					</div>
					<li id="home-element">
						<Link activeClass="active" to="/" spy={true} smooth={true} offset={-70} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="/contact" spy={true} smooth={true} offset={-70} duration={500}>
							Contact
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="/projects" spy={true} smooth={true} offset={-70} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="/tech" spy={true} smooth={true} offset={-70} duration={500}>
							Tech
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="/resources" spy={true} smooth={true} offset={-70} duration={500}>
							Resources
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
