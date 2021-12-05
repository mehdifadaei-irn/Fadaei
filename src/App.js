import TopBar from "./components/topBar/TopBar";
import './App.scss'
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import TestMa from "./components/testimonials/TestMa";
import Menu from "./components/menu/Menu"
import {useSelector} from "react-redux";


function App() {

    const bool = useSelector(state => state.bool);
    console.log(bool.myBool);

  return (
    <div className={'app'}>
      <TopBar/>
      <Menu/>
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
