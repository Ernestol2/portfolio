import { Routes, Route } from 'react-router-dom'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import MoreProjects from './components/MoreProjects';
import SingleProject from './components/SingleProject';

function App() {

  useEffect(() => {
    window.scrollTo(0 , 0);
  }, [])
  

  return (
    <div className='App'>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/proyectos' element={<MoreProjects />} />
          <Route path='/proyectos/:id' element={<SingleProject />} />
        </Routes>
    </div>
  )
}
    
    

export default App
