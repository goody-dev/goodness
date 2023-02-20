import React from 'react';
import '../App.css';

const list = [
    {
        title: 'Design Implementation',
        detail: 'I implement web designs with precision and the right tools, so that your products can be shipped within the required period of time.'
    },
    {
        title: 'Collaboration',
        detail: 'I love collaborating with other developers to build products that are of high quality, as it fosters fast and efficient building of products. It also helps me to grow by learning from team mates.'
    },
    {
        title: 'Solo Building',
        detail: 'I do work on small scale websites that requires only frontend or negligeable backend. In this case, I am open to be involved in the websites design.'
    }
    ];

class WorkLife extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    
    return (
      <div id="workLife" className="w-100 p-5 d-flex flex-row flex-wrap justify-content-center align-items-between surface1-dark" style={{height: 'maxContent', color:'#EEEEEE'}}>
      <h1 className="text1-dark block w-100" style={{}}>How I Build</h1>
      <p className="text2-dark block w-100">I work differently based on your solution</p>
      {
          list.map((item) =>
        <div className="surface2-dark text-start my-3 w-100 mx-auto p-3 rounded-3 shadow-dark" style={{maxWidth: 350}} key={item.title}>
           <h2 className="text1-dark">{item.title}</h2>
           <p className="text2-dark">{item.detail}</p>
        </div>
          )
      }
      </div>
    );
  }
}

export {WorkLife}