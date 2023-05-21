import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import About from './About';
import './App.css';
import Expirience from './Expirience';
import Navigation from './Navigation';
import NewHero from './NewHero';
import Projectos from './Projectos';



function App() {

  useEffect(() => {
    window.scrollTo(0 , 0);
  }, [])
  

  return (
    <div className='App'>
      <Navigation />
      <NewHero />
      <About />
      <Projectos />
      <Expirience />
    </div>
  )
}

export default App
