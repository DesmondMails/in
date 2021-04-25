import './App.scss';
import Header from './components/Header/Header.jsx';
import Welcome from "./components/Welcome/Welcome";
import Video from "./components/Video/Video";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Customers from "./components/Customers/Customers";
import Benefits from "./components/Benefits/Benefits";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import TestNav from './components/TestNav/TestNav';

function App() {
    return (
        <div className="App">
            {/* <Navbar/> */}
            <TestNav />
            <Welcome/>
            <About/>
            <Video/>
            <Projects />
            <Customers />
            <Benefits />
            <Feedback />
            <Footer />
        </div>
    );
}

export default App;
