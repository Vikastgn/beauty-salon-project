import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Services} from "./layout/sections/services/Services";
import {Works} from "./layout/sections/works/Works";
import {AboutUs} from "./layout/sections/aboutUs/AboutUs";
import {Footer} from "./layout/footer/Footer";
import {Cosmetics} from "./layout/sections/cosmetics/Cosmetics";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutUs/>
            <Services/>
            <Cosmetics/>
            <Works/>
            <Footer/>
        </div>
    );
}

export default App;
