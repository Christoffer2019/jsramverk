import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-columns">
                    <div className="footer-col-1">
                        <h3>Om kursen jsramverk</h3>
                        <p>Christoffer Lymalm studerar jsramverk under
                        läsperiod 1, höstterminen 2020 vid Blekinge Tekniska
                        Högskola.</p>
                    </div>
                    <div className="footer-col-2">
                        <h3>Om den här webbsidan</h3>
                        <p>Den här webbsidan är uppbyggd av HTML, CSS, LESS,
                        JavaScript, React och markdown.</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Referenser</h3>
                        <p>
                            Bilder:
                            <a href="https://stock.adobe.com/"> AdobeStock</a>,
                            <a href="https://pixabay.com"> Pixabay</a>,
                            <a href="https://favicon.io/"> favicon.ico</a>
                        </p>
                        <p>
                            Ikoner:
                            <a href="https://icofont.com/icons"> Icofont</a>,
                            <a href="https://fonts.google.com/"> Google Fonts</a>
                        </p>
                    </div>
                </div>
                <div className="footer-main">
                    <p>Copyright © 2020 Christoffer Lymalm</p>
                </div>
            </footer>
        );
    }
};

export default Footer;
