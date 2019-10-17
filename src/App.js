import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Resources from './pages/Resources';
import About from './pages/About';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/tech" component={Tech} />
					<Route exact path="/resources" component={Resources} />
					<Route exact path="/about" component={About} />
					<Header />
					<div className="nav-bar">
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
				</div>
			</Router>
		);
	}
}

export default App;
