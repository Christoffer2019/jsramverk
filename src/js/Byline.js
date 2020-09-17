import React, { Component } from 'react';
import imageChristoffer from "./../img/christoffer.jpg";

class Byline extends Component {
    render() {
        return (
            <div className="byline">
                <div className="byline-image">
                    <img 
                        src={imageChristoffer}
                        alt="Christoffer Lymalm">
                    </img>
                </div>
                <div className="byline-text">
                    <p>Christoffer Lymalm studerar Webbprogrammering 120hp på 
                        distans vid Blekinge Tekniska Högskola under 
                        2019-2021. Under läsperiod 1 ht 2020 studerar 
                        Christoffer kursen jsramverk. På den här webbsidan 
                        publiceras redovisningstexter för kursens uppgifter. 
                        Christoffer har utvecklat den här webbsidan i HTML, 
                        CSS, LESS, JavaScript, JS ramverket React samt 
                        markdown.</p>
                </div>
            </div>
        );
    }
}

export default Byline;
