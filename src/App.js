import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import Footer from './components/Footer';
class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Nav />
					<Sidebar />
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/tech" component={Tech} />
					<Route exact path="/resources" component={Resources} />
					<Route exact path="/about" component={About} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
