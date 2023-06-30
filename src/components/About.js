import React from 'react';
import DevImg from '../Assets/profile-img.png';
import '../App.css';

class About extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
        <div id="about" className="surface1-dark w-100 px-4 px-sm-5 d-flex flex-column flex-sm-row-reverse justify-content-sm-between align-items-sm-center" style={{maxHeight:"auto", height: '100vh'}}>
            <div className="align-self-center" style={{width:'auto'}}>
                <img src={DevImg} alt="young developer image" className="d-block mx-auto" style={{width:'auto', maxWidth:450}}/>
            </div>
            <div className="text-sm-start mb-5 mb-sm-0 me-sm-5" style={{}}>
                <h2 className="text2-dark" style={{fontSize: 'clamp(16px,35px,50px)'}}>Hello, Universe!</h2>
                <h1 className="text1-dark" style={{fontSize: 'clamp(18px,40px,70px)'}}>I'm <span style={{textShadow:'0px 0px 7px #00ADB5', fontWeight:'bold'}}>Goodness</span>, a <span style={{textShadow:'0px 0px 7px #00ADB5', fontWeight:'bold'}}>Frontend Developer</span></h1>
                <p className="text2-dark" style={{fontSize: 'clamp(10px, 18px, 30px)'}}>I'm a developer based in Nigera. I look forward to work on projects and face new challenges.<br/> I build unique & quality frontends that evolves business<br /> with the use of up to date technologies</p>
                <a href="https://wa.me/+2349015174899"><button className="btn rounded-2 p-2 brand-light text1-dark btn-hover" style={{}} >Get in Touch</button></a>
            </div>
         </div>
        );
    }
}

export { About }