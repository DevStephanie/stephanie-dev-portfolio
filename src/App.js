import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import "./styles/Root.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
