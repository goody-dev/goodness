import React from 'react';
import TwitterLogo from '../Assets/twitter.svg';
import LinkedInLogo from '../Assets/linkedin.svg';
import InstagramLogo from '../Assets/instagram.svg';
import '../App.css';
import { sendForm } from 'emailjs-com';

class Contact extends React.Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.state = {
          contactID: "000000",
          name: "",
          email: "",
          message: "",
          statusMessage: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.generateContactID= this.generateContactID.bind(this);
      
  }
  
  generateContactID =()=> {
      var contactStr = "000000" + (Math.random() * 1000000 | 0);
      this.setState({
          contactID: contactStr.substring(contactStr.length - 6),
      });
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }  
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  }
  handleSubmit = (event) => {
      this.generateContactID();
      event.preventDefault();
      
      sendForm('default_service', 'template_w2vat4l', this.myRef.current , 'Ek8Jx_lY3-cvLuQnf').then(
        (response) => {
          alert('Message Sent... Thanks for reaching out!', response.status, response); 
          this.setState({
            statusMessage: "Message Sent...Thanks for reaching out!"
          });
        }, 
        (error) => {
          alert("Error... Try sending again", error);
          this.setState({
            statusMessage: "Error... Trying sending again"
          });
        }
      );
      this.setState({
        name: "",
        email: "",
        message: ""
      })
      
  }
 
  render () {
    
    return (
      <div id="contact" className="surface1-dark w-100 p-5 align-items-center" style={{height: 'fit-content', color: '#00ADB5'}}>
         <h1>Contact</h1>
         <p className="text2-dark" style={{color:'#EEEEEE'}}>Let's rub minds and work together 😀</p>
         <form ref={this.myRef} className="container d-flex flex-column text-start rounded-4 p-3 w-sm-70" style={{border:'2px solid #00ADB5', maxWidth: 500}} id="contact-form" onSubmit={this.handleSubmit}>
            <input type="hidden" name="contact_number" value={this.state.contactID}/>
            <label htmlFor="name" className="d-flex flex-column my-2">Name
            <input id="name" required name="user_name" type="text" placeHolder="Enter your name" className="surface2-dark border-0 rounded-3" style={{height:50, color:'#EEEEEE'}} onChange={this.handleNameChange} value={this.state.name}/>
            </label>
            <label htmlFor="email" className="d-flex flex-column my-2">Email
            <input required name="user_email" id="email" type="email" placeHolder="Enter your email" className="surface2-dark border-0 rounded-3" style={{height:50, color:'#EEEEEE'}} onChange={this.handleEmailChange} value={this.state.email}/>
            </label>
            <label htmlFor="message" className="d-flex flex-column my-2">Got some info for me?
            <textarea name="message" id="message" type="text" placeHolder="Message" className="surface2-dark border-0 rounded-3" style={{height: 100, color:'#EEEEEE'}} onChange={this.handleMessageChange} value={this.state.message} />
            </label>
            <input type="submit" className="btn block my-2 btn-hover text1-dark brand-light" value="Message Me"/>
         </form>
         <div className="w-100 my-3 mx-auto d-flex flex-row justify-content-center">
            <a href="https://instagram.com/codeevolver"><img src={InstagramLogo} alt="Instagram link" style={{width:'3rem', margin: 30}}/></a>
            <a href="https://www.linkedin.com/in/goodness-o-939796225"><img src={LinkedInLogo} alt="LinkedIn link"style={{width:'3rem', margin: 30}} /></a>
            <a href="https://twitter.com/code_evolver"><img src={TwitterLogo} alt="Twitter link" style={{width:'3rem', margin: 30}} /></a>
         </div>
      </div>
    )
  }
}

export { Contact }