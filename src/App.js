import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<div className="App">
						<Route path="/" component={Home} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/projects" component={Projects} />
						<Link to="/">Home</Link>
						<Link to="/contact">Contact Me</Link>
						<Link to="/projects">Projects</Link>
					</div>
				</Switch>
			</Router>
		);
	}
}

export default App;
