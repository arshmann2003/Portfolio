import './App.scss';
import {Routes, Route, Router} from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import { Switch } from '@material-ui/core';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path='/projects/:id' element={<ProjectDisplay />} />
                </Route>
            </Routes>
    )
}

function CatchAll() {
    const location = useLocation();
  
    // Determine the appropriate component to render based on the route
    if (location.pathname === '/projects') {
      return <Projects />;
    } else if (location.pathname.startsWith('/projects/')) {
      return <ProjectDisplay />;
    } 
  }
export default App;
