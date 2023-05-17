import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero/Hero';
import Green from './Green';
import Navigation from './Navigation';
import Red from './Red';
import Yellow from './Yellow';


function App() {
  

  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Red />
      <Yellow />
      <Green />
    </div>
  )
}

export default App
