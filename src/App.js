import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { WorkLife } from './components/WorkLife';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
//import './leaguespartan/static';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
    <div className="App m-0">
      <Header />
      <About />
      <WorkLife />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
    );
  }
}

export default App;
