import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div class="nav-cont">
			<ul className="nav-list">
				<li>
					<Link activeClass="active" to="/" spy={true} smooth={true} offset={-70} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link activeClass="active" to="/about" spy={true} smooth={true} offset={-70} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
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
	);
};

export default Nav;
