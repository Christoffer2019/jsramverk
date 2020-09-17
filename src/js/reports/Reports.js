import React, { Component } from 'react';
import imageReports from "./../../img/reports.jpg";

class Reports extends Component {
    constructor() {
        super();
        this.state = {content: ""}
    }

    componentDidMount() {
        var MarkdownIt = require('markdown-it');
        var md = new MarkdownIt();

        fetch(require("../../markdown/reports/reports.md"))
        .then((response) => response.text())
        .then((result) => this.setState({ content: md.render(result)}))
    }

    render() {
        return (
            <div className="outer-wrap-main">
                <main className="container">
                    <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                    <img src={imageReports} alt="Laptop"></img>
                </main>
            </div>
        );
    }
}

export default Reports;
