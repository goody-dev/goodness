import React from 'react';
import TwitterLogo from '../Assets/twitter.svg';
import FacebookLogo from '../Assets/facebook.svg';
import InstagramLogo from '../Assets/instagram.svg';
import '../App.css';

class Contact extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id="contact" className="surface1-dark w-100 p-5 align-items-center" style={{height: 'fit-content', color: '#00ADB5'}}>
         <h1>Contact</h1>
         <p className="text2-dark" style={{color:'#EEEEEE'}}>Let's rub minds and work together 😀</p>
         <form class="container d-flex flex-column text-start rounded-4 p-3 w-sm-70" style={{border:'2px solid #00ADB5', maxWidth: 500}} action="mailto: goodnessokanlawon12@gmail.com" method="POST" enctype="Text/Plain">
            <label for="email" className="d-flex flex-column my-2">Email
            <input required name="email" id="email" type="email" placeHolder="Enter your email" className="surface2-dark border-0 rounded-3" style={{height:50, color:'#EEEEEE'}}/>
            </label> 
            <label for="name" className="d-flex flex-column my-2">Name
            <input id="name" required name="fullname" type="text" placeHolder="Enter your name" className="surface2-dark border-0 rounded-3" style={{height:50, color:'#EEEEEE'}}/>
            </label>
            <label for="message" className="d-flex flex-column my-2">Got some info for me?
            <textarea name="detail" id="name" type="text" placeHolder="Message" className="surface2-dark border-0 rounded-3" style={{height: 100, color:'#EEEEEE'}} />
            </label>
            <button type="submit" className="btn block my-2 btn-hover text1-dark brand-light" style={{}}>Message Me</button>
         </form>
         <div className="w-100 my-3 mx-auto d-flex flex-row justify-content-center">
            <a href="https://instagram.com/codeevolver"><img src={InstagramLogo} alt="Instagram link" style={{width:'3rem', margin: 30}}/></a>
            <a href="https://facebook.com"><img src={FacebookLogo} alt="Facebook link"style={{width:'3rem', margin: 30}} /></a>
            <a href="https://twitter.com/code_evolver"><img src={TwitterLogo} alt="Twitter link" style={{width:'3rem', margin: 30}} /></a>
         </div>
      </div>
    );
  }
}

export { Contact }