import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./style/css/style.min.css";
import Home from './js/Home';
import Reports from './js/reports/Reports';
import logo from "./img/logo.png";
import Footer from './js/Footer';
import flashImage from "./img/flash.jpg";
import Week1 from "./js/reports/Week-1";

class App extends Component {
    constructor() {
        super();
        this.state = {
            displayBlock:"none",
            displayFlex:"none",
            iconPart1:"mobile-nav-icon-parts",
            iconPart2:"mobile-nav-icon-parts",
            iconPart3:"mobile-nav-icon-parts",
            prevScrollPos:0,
            currScrollPos:0,
            showArrow: "none",
            dropdownContent:"none",
            dropdownContentClassName:"fas fa-chevron-down icon dropdown-content-arrow"
        };

        this.showNav = this.showNav.bind(this);
        this.changeScrollPosition = this.changeScrollPosition.bind(this);
        this.showScrollToTopArrow = this.showScrollToTopArrow.bind(this);
        this.showDropdownContent = this.showDropdownContent.bind(this);
    }

    showNav() {
        if(this.state.displayBlock === "block") {
            this.setState(prevState => ({
                displayBlock:"none",
                displayFlex:"none",
                iconPart1:"mobile-nav-icon-parts",
                iconPart2:"mobile-nav-icon-parts",
                iconPart3:"mobile-nav-icon-parts",
            }));
        } else {
            this.setState(prevState => ({
                displayBlock:"block",
                displayFlex:"flex",
                iconPart1:"mobile-nav-icon-parts part1",
                iconPart2:"mobile-nav-icon-parts part2",
                iconPart3:"mobile-nav-icon-parts part3",
                dropdownContent:"none",
                dropdownContentClassName:"fas fa-chevron-down icon dropdown-content-arrow"
            }));
        }
    }

    changeScrollPosition() {
        window.scrollTo(0, 0);
    }

    showScrollToTopArrow() {
        if(window.innerWidth > 900) {
            if(window.scrollY > 100) {
                this.setState(prevState => ({
                    prevScrollPos:this.state.currScrollPos,
                    currScrollPos:window.scrollY
                }));

                if(this.state.currScrollPos > this.state.prevScrollPos) {
                    this.setState(prevState => ({
                        showArrow:"none"
                    }));
                } else {
                    this.setState(prevState => ({
                        showArrow:"block"
                    }));
                }
            } else {
                this.setState(prevState => ({
                    currScrollPos:0,
                    showArrow:"none"
                }));
            }
        }
    }

    showDropdownContent() {
        if(this.state.dropdownContent === "block") {
            this.setState(prevState => ({
                dropdownContent:"none",
                dropdownContentClassName:"fas fa-chevron-down icon dropdown-content-arrow"
            }));
        } else {
            this.setState(prevState => ({
                dropdownContent:"block",
                dropdownContentClassName:"fas fa-chevron-up icon dropdown-content-arrow"
            }));
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.showScrollToTopArrow);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.showScrollToTopArrow);
    }

    render() {
        var active = window.location.pathname;
        //console.log(active);

        return (
            <Router>
            <div className="App">
                <nav className="nav">
                    <Link to={"/"} style={{display:this.state.displayBlock}} id="logo" onClick={this.showNav}>
                        <img className="logo-image" src={logo}
                            alt="logo"></img>
                        <span className="logo-text">
                            Christoffers me-sida i kursen jsramverk
                        </span>
                    </Link>

                    <div className="mobile-nav-items" id="mobile-nav-items" style={{display:this.state.displayFlex}}>
                        <Link to={"/"} className={`nav-item ${active === "/" ? "active" : ""}`} onClick={this.showNav}>
                            <i className={`icofont-home icon ${active === "/" ? "active" : ""}`}></i>
                            <span className={`icon-text ${active === "/" ? "active" : ""}`}>Hem</span>
                        </Link>
                        <div className="dropdown">
                            <Link to={"/reports"} className={`nav-item dropdown-item ${active === "/reports" ? "active" : ""}`} onClick={this.showNav}>
                                <i className={`icofont-paper icon ${active === "/reports" ? "active" : ""}`}></i>
                                <span className={`icon-text ${active === "/reports" ? "active" : ""}`}>Redovisningar</span>
                            </Link>

                            <i className={this.state.dropdownContentClassName} onClick={this.showDropdownContent}></i>

                            <div className="dropdown-content" style={{display:this.state.dropdownContent}}>
                                <Link
                                    to={"/reports/week/1"}
                                    className={`nav-item dropdown-content-item ${active === "/reports/week/1" ? "active" : ""}`}
                                    onClick={this.showNav}>
                                    <i className={`icofont-paper icon ${active === "/reports/week/1" ? "active" : ""}`}></i>
                                    <span className={`icon-text ${active === "/reports/week/1" ? "active" : ""}`}>Vecka 1</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-nav-icon" id="mobile-nav-icon" onClick={this.showNav}>
                        <div className={this.state.iconPart1}></div>
                        <div className={this.state.iconPart2}></div>
                        <div className={this.state.iconPart3}></div>
                    </div>
                </nav>

                <i
                    className="fas fa-chevron-up icon icon-large"
                    id="scroll-to-top"
                    onClick={this.changeScrollPosition}
                    style={{display:this.state.showArrow}}
                ></i>

                <div className="flash-image">
                    <img src={flashImage} alt="berg"></img>
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
