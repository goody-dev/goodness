import React from 'react';
import BlogrImg from '../Assets/blogr-mobile.png';
import DashboardImg from '../Assets/dashboard-desktop-view.png';
import DevPortImg from '../Assets/developer-portfolio.png';
import PingImg from '../Assets/Screenshot_20230220-005648~2.png';
import '../App.css';

const projects = [
    {
        id: 'Blogr Landing Page',
        img: BlogrImg,
        detail: '',
        link: 'https://github.com',
    },
    {
        id: 'Time Tracking Dashboard',
        img: DashboardImg,
        detail: '',
        link: 'https://github.com',
    },
    {
        id: 'Developer Portfolio',
        img: DevPortImg,
        detail: '',
        link: 'https://github.com',
    },
    {
        id: 'Ping Coming Soon Page',
        img: PingImg,
        detail: '',
        link: 'https://github.com',
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
             <a className="mx-auto" href={project.link} style={{textDecoration:'none'}}><div className="surface2-dark text1-dark d-flex flex-column w-80 rounded-3 my-3 my-sm-5 justify-content-between shadow-dark" style={{maxWidth: 300, minHeight: 300}}>
                <img src={project.img} alt="Project Images" className="rounded-3" />
                <p>{project.id}</p>
            </div>
            </a>
             )
         }
      </div>
    );
  }
}

export { Projects }