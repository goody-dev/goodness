import React from 'react';
import DevImg from '../Assets/developer-boy.png';
import '../App.css';

class About extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
        <div id="about" className="surface1-dark w-100 p-3 p-sm-5 d-flex flex-column flex-sm-row justify-content-center align-items-sm-center" style={{maxHeight:650, height: '90vh'}}>
            <div className="w-100 h-60 text-sm-start mb-5 mb-sm-0" style={{}}>
                <h2 className="text2-dark" style={{fontSize: 'clamp(16px,25px,30px)'}}>Hello, Universe!</h2>
                <h1 className="text1-dark" style={{fontSize: 'clamp(18px,30px,40px)'}}>I'm <span style={{textShadow:'0px 0px 7px #00ADB5', fontWeight:'bold'}}>Goodness</span>, a <span style={{textShadow:'0px 0px 7px #00ADB5', fontWeight:'bold'}}>Frontend Developer</span></h1>
                <p className="text2-dark" style={{fontSize: 'clamp(10px, 14px, 20px)'}}>I'm a developer based in Nigera. I look forward to work on projects and face new challenges.<br/> I build unique & quality frontends that evolves business<br /> with the use of up to date technologies</p>
                <a href="https://wa.me/+2349015174899"><button className="btn rounded-2 p-2 brand-light text1-dark btn-hover" style={{}} >Get in Touch</button></a>
            </div>
            <img src={DevImg} alt="young developer image" className="w-100 d-none d-sm-block" />
         </div>
        );
    }
}

export { About }