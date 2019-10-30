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
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav />
					<Sidebar />

					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/tech" component={Tech} />
					<Route exact path="/resources" component={Resources} />
					<Route exact path="/about" component={About} />

					<Header />
				</div>
				<div className="footer-cont">
					<footer className="footer">2019 &#169; Stephon Patton</footer>
				</div>
			</Router>
		);
	}
}

export default App;

//TODO: Add copyright sign to footer ---DONE
