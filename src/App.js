import './App.scss';
import Header from './components/Header/Header.jsx';
import Welcome from "./components/Welcome/Welcome";
import Video from "./components/Video/Video";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Welcome/>
            <About/>
            <Video/>
        </div>
    );
}

export default App;
