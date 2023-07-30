import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';

import ScrollToTop from './Utils/ScrollToTop';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Footer from './components/footer/Footer';

import './styles/style.scss';
function App() {
    if(!window.localStorage.getItem('slides')) {
        window.localStorage.setItem('slides', JSON.stringify([]))
    }
    const about = useRef(null);
    return (
        <div className="App">
            <div className="wrapper">
                <Router>
                    <ScrollToTop />
                    <Nav elementRef={about}/>

                    <Routes>
                        <Route path='/' element={<Home elementRef={about}/>} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/project/:id' element={<Project />} />
                    </Routes>
                    <Footer elementRef={about} />
                </Router>
            </div>
        </div>
    );
}

export default App;
