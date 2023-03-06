import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="surface2-dark p-5 w-100 d-flex flex-column align-items-center justify-content-sm-evenly flex-sm-row flex-wrap text1-dark" style={{}}>
         <div className="d-flex flex-column text-center text-sm-start my-3">
            <h4>Attributions</h4>
            <a className="text2-dark link" hreftitle="close icons"></a>
            <a className="text2-dark link" href="#">Svgrepo Icons</a>
            <a className="text2-dark link" href="#">Google Fonts - League Spartan</a>
         </div>
         <div className="d-flex flex-column text-center text-sm-start my-3">
            <h4>More</h4>
            <a className="text2-dark link">Know Christ</a>
            <a className="text2-dark link">Work with Me</a>
            <a className="text2-dark link">Request Resume</a>
         </div>
         <p className="w-100 my-3 text-center" style={{fontSize:18}}>©CodeEvolver</p>
      </div>
    );
  }
}

export { Footer }