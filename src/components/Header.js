import React from 'react';
import Menu from '../Assets/menu-burger-horizontal.svg';
import Close from '../Assets/close-x-svgrepo-com.svg'
import '../App.css';

const navigator = [
    {
        navHeader: 'Work',
        link: '#workLife',
    },
    {
        navHeader: 'Stack',
        link: '#stack',
    },
    {
        navHeader: 'Projects',
        link: '#projects',
    },
    {
        navHeader: 'Contact',
        link: '#contact',
    },
    ];

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        visibility: false
    };
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }
  
  toggleNavBar(){
      this.setState(state => ({
         visibility: !state.visibility 
      }))
  }
  
  render () {
    let navBar = (
      <div className="d-flex flex-sm-row align-items-center">
        {
            navigator.map(nav => 
                <a className="link m-2 text2-dark" href={nav.link} style={{textDecoration:'none'}}>{nav.navHeader}
                </a>
            )
        }
        <a href="https://www.frontendmentor.io/profile/CodeEvolver"><button type="button" className="btn" style={{color: 'var(--brand-light)', textDecoration:'none', border:'2px solid #00ADB5', width: 'fit-content'}}>Hire Me</button></a>
      </div>
          );
    let molBar = (
      <div className="rounded-2 shadow-dark py-5 d-flex flex-column align-items-center px-3 surface2-dark" style={{width:'95vw', height:'auto'}}>
        {
            navigator.map(nav => 
                <a className="m-2 text2-dark link" href={nav.link} style={{textDecoration:'none'}}>{nav.navHeader}
                </a>
            )
        }
        <a href="https://www.frontendmentor.io/profile/CodeEvolver"><button type="button" className="btn" style={{color: 'var(--brand-light)', textDecoration:'none', border:'2px solid #00ADB5', width: 'fit-content'}}>Hire Me</button></a>
      </div>
          );
    let none = ("");
    return (
    <div className="surface1-dark w-100 p-3 px-sm-5 sticky-top d-flex flex-column flex-sm-row justify-content-sm-center align-items-center text1-dark shadow-dark">
      <div className="d-flex flex-row w-100 align-items-center justify-content-between">
        <a href="#about" className="logo col-sm-auto align-middle" style={{color: 'var(--brand-light)', textDecoration:'none', fontSize: 'clamp(20px, 27px, 35px)'}}>Goody</a>
        <button className="bg-transparent border-0 d-sm-none" style={{width: 'fit-content'}} onClick={this.toggleNavBar}><img src={this.state.visibility? Close: Menu}alt="menu" style={{width:'35px', height: 'auto'}}/></button>
        <span className="d-none d-sm-block align-middle">{navBar}</span>
      </div>
      <span className="d-sm-none position-absolute  my-5">{this.state.visibility? molBar: none}</span>
    </div>
    );
  }
}

export { Header }