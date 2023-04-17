import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const more = <div className="d-flex flex-column text-center text-sm-start my-3">
            <h4>More</h4>
            <a className="text2-dark link" href="https://www.moodybible.org/knowing-christ/">Know Christ</a>
            <a className="text2-dark link" href="https://github.com/CodeEvolver">Visit GitHub</a>
         </div>;
         
    return (
      <div className="surface2-dark p-5 w-100 d-flex flex-column align-items-center justify-content-sm-evenly flex-sm-row flex-wrap text1-dark" style={{}}>
         <div className="d-flex flex-column text-center text-sm-start my-3">
            <h4>Attributions</h4>
            <a className="text2-dark link" href="https://svgrepo.com">Svgrepo Icons</a>
            <a className="text2-dark link" href="https://fonts.google.com">Google Fonts - League Spartan</a>
         </div>
         {more}
         <p className="w-100 my-3 text-center" style={{fontSize:18}}>©GoodnessOkanlawon</p>
      </div>
    );
  }
}

export { Footer }