import React from 'react';

class Testimonials extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="p-5 border-top border-bottom" >
         <h1>Client Reviews</h1>
         <div className="hstack card">
            <div className="vstack">
                <img src="#" />
                <h2>Merc Okan</h2>
                <p>CEO at Mern</p>
            </div>
            <div>
                <p>Long life and the whole pdf download the free to contact you ma I want you to is well known</p>
            </div>
          </div>
          <div className="hstack card">
            <div className="vstack">
                <img src="#" />
                <h2>Merc Okan</h2>
                <p>CEO at Mern</p>
            </div>
            <div>
                <p>Long life and the whole pdf download the free to contact you ma I want you to is well known</p>
            </div>
          </div>
      </div>
    );
  }
}

export { Testimonials }