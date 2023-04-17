import React from 'react';
import HtmlLogo from '../Assets/html.svg';
import CssLogo from '../Assets/css.svg';
import BsLogo from '../Assets/bootstrap.svg';
import jLogo from '../Assets/jquery.svg';
import JsLogo from '../Assets/javascript.svg';
import ReactLogo from '../Assets/react.svg';
import GitHubLogo from '../Assets/github.svg';
import GitLogo from '../Assets/git.svg';
import '../App.css';

const stack = [
    {
        tech: 'HTML',
        img: HtmlLogo,
    }, {
        tech: 'CSS',
        img: CssLogo,
    }, {
        tech: 'JavaScript',
        img: JsLogo,
    }, {
        tech: 'Bootstrap',
        img: BsLogo,
    }, {
        tech: 'jQuery',
        img: jLogo,
    }, {
        tech: 'React',
        img: ReactLogo,
    }, {
        tech: 'GitHub',
        img: GitHubLogo,
    }, {
        tech: 'Git',
        img: GitLogo,
    },
    ]

class Stack extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div id="stack" className="w-100 py-5 surface1-dark" style={{}}>
  p      <h1 className="text1-dark" style={{}}>My Tech Stack</h1>
         <p className="text2-dark">I currently work with these technologies</p>
        <div className="d-flex g-20 flex-row flex-wrap w-100 px-md-5 justify-content-center mx-auto" style={{maxWidth:800}}>
        {
            stack.map(tool => 
                <div className="my-3 my-md-4 mx-3 w-25 rounded-2 p-2 d-flex flex-column align-items-center justify-content-between text2-dark" style={{maxWidth: 80, height: 135}}>
                    <img src={tool.img} className="w-100"/>
                    <p>{tool.tech}</p>
                </div>
            )
        }
        </div>
      </div>
    );
  }
}

export { Stack }