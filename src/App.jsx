import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import About from './About';
import './App.css';
import Expirience from './Expirience';
import Footer from './Footer';
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
      <Footer />
    </div>
  )
}

export default App
