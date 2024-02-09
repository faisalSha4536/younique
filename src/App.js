import './App.scss';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Video from './components/Video';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Video/>
     <About/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
