import React from 'react';
import BlogrImg from '../Assets/blogr-mobile.png';
import DashboardImg from '../Assets/dashboard-desktop-view.png';
import DevPortImg from '../Assets/developer-portfolio.png';
import PingImg from '../Assets/Screenshot_20230220-005648~2.png';
import '../App.css';

const projects = [
    {
        id: 'Time Tracking Dashboard',
        img: DashboardImg,
        detail: '',
        link: 'https://codeevolver.github.io/time-tracking-dashboard-main/',
        status: 'Completed',
    },
    {
        id: 'Developer Portfolio',
        img: DevPortImg,
        detail: '',
        link: 'https://goodness.vercel.app',
        status: 'Completed',
    },
    {
        id: 'Ping Coming Soon Page',
        img: PingImg,
        detail: '',
        link: 'https://codeevolver.github.io/ping-coming-soon-page-master/',
        status: 'Completed',
    },
    {
        id: 'Blogr Landing Page',
        img: BlogrImg,
        detail: '',
        link: 'https://blogr-landing-page-ce.vercel.app',
        status: 'Ongoing',
    },
    ]

class Projects extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id="projects" className="w-100 surface1-dark p-5 d-flex flex-row flex-wrap" style={{}}>
         <h1 className="text1-dark block w-100" style={{}}>Projects</h1>
         <p className="text2-dark block w-100">Building projects and collaborating are ways of honing my skill.<br/>I learn from every project</p>
         {
             projects.map(project=> 
             <div className="surface2-dark text1-dark d-flex flex-column w-80 rounded-3 my-3 my-sm-5 justify-content-between shadow-dark mx-auto w-100" style={{maxWidth: 300, minHeight: 300}}>
                <img src={project.img} alt="Project Images" className="rounded-3 w-auto" />
                <p className="my-1">{project.id}</p>
                <div className="w-100 d-flex flex-row my-2 align-items-center flex-wrap">
                    <p className="col-auto mx-auto" style={{color: 'var(--brand-light)'}}>Status: {project.status}</p>
                    <a className="mx-auto col-auto" href={project.link} style={{textDecoration:'none'}}><button type="button" className="btn" style={{color: 'var(--brand-light)', textDecoration:'none', border:'2px solid #00ADB5', width: 'fit-content'}}>View</button></a>
                </div>
            </div>
             )
         }
      </div>
    );
  }
}

export { Projects }