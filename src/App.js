import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./style/css/style.min.css";
import Home from './js/Home';
import Reports from './js/reports/Reports';
import logo from "./img/logo.png";
import Footer from './js/Footer';
import flashImage from "./img/AdobeStock_166347213.jpeg";
import Week1 from "./js/reports/Week-1";

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <nav className="nav">
                    <Link to={"/"} id="logo">
                        <img className="logo-image" src={logo}
                            alt="logo"></img>
                        <span className="logo-text">
                            Christoffers me-sida
                        </span>
                    </Link>
                    <div className="desktop-nav-items" id="desktop-nav-items">
                        <Link to={"/"} className="nav-item">
                            <i className="icofont-home icon icon-medium"></i>
                            <span className="icon-text">Hem</span>
                        </Link>
                        <div className="dropdown">
                            <Link to={"/reports"} className="nav-item">
                                <i className="icofont-paper icon icon-medium"></i>
                                <span className="icon-text">Redovisningar</span>
                            </Link>
                            <div className="dropdown-content">
                                <Link to={"/reports/week/1"} className="nav-item dropdown-item">
                                    <i className="icofont-paper icon icon-medium"></i>
                                    <span className="icon-text">Vecka 1</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="flash-image">
                    <img src={flashImage} alt="solnedgång över havet"></img>
                </div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/reports/week/1" component={Week1} />
                    <Route path="/reports" component={Reports} />
                </Switch>

                <Footer/>
            </div>
            </Router>
        );
    }
}

export default App;
