import React, { Component } from 'react';
import Byline from "../Byline";

class Week1 extends Component {
    constructor() {
        super();
        this.state = {content: ""}
    }

    componentDidMount() {
        var MarkdownIt = require('markdown-it');
        var md = new MarkdownIt();

        fetch(require("../../markdown/reports/week-1-main.md"))
        .then((response) => response.text())
        .then((result) => this.setState({ content: md.render(result)}))
    }

    render() {
        return (
            <div className="outer-wrap-main">
                <main className="container">
                    <h1>Vecka 1</h1>
                    <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                    <Byline />
                </main>
            </div>
        );
    }
}

export default Week1;
