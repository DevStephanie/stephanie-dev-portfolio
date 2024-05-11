import './App.css';
import About from './components/About';
import ArtDump from './components/ArtDump';
import Experience from './components/Experience';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import "./styles/Root.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <ArtDump />
        <Footer />
      </div>
    </div>
  );
}

export default App;
