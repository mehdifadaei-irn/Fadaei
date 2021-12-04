import TopBar from "./components/topBar/TopBar";
import './App.scss'
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import TestMa from "./components/testimonials/TestMa";


function App() {
  return (
    <div className={'app'}>
      <TopBar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <TestMa/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
