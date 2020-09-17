import React, { Component } from 'react';
import imageChristoffer from "./../img/christoffer.jpg";

class Home extends Component {
    constructor() {
        super();
        this.state = {content: ""}
    }

    componentDidMount() {
        var MarkdownIt = require('markdown-it');
        var md = new MarkdownIt();

        fetch(require("../markdown/home.md"))
        .then((response) => response.text())
        .then((result) => this.setState({ content: md.render(result)}))
    }

    render() {
        return (
            <div className="outer-wrap-main">
                <main className="container">
                    <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                </main>
                <div className="sidebar">
                    <img src={imageChristoffer} alt="Christoffer Lymalm"></img>
                </div>
            </div>
        );
    }
}

export default Home;
